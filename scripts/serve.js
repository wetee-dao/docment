import http from 'http';
import fs from 'fs';
import path from 'path';
import chokidar from 'chokidar';
import { spawn } from 'child_process';

const DEFAULT_PORT = Number(process.env.PORT || 4000);
const ROOT = path.resolve('_book');
const WATCH_ROOT = path.resolve('.');
const RELOAD_ENDPOINT = '/__reload';

const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
};

const sseClients = new Set();
function broadcastReload() {
    const msg = `event: reload\ndata: ${Date.now()}\n\n`;
    for (const res of sseClients) {
        try {
            res.write(msg);
        } catch {
            // ignore broken clients
        }
    }
}

function injectLiveReload(html) {
    const snippet = `
<script>
(() => {
  try {
    const es = new EventSource('${RELOAD_ENDPOINT}');
    es.addEventListener('reload', () => location.reload());
  } catch (e) {}
})();
</script>
`;
    if (html.includes(RELOAD_ENDPOINT)) return html; // avoid double-inject
    if (html.includes('</body>')) return html.replace(/<\/body>/i, `${snippet}</body>`);
    return html + snippet;
}

let building = false;
let buildQueued = false;
function runBuild() {
    if (building) {
        buildQueued = true;
        return;
    }
    building = true;
    const child = spawn(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['run', 'build'], {
        cwd: WATCH_ROOT,
        stdio: 'inherit',
    });
    child.on('exit', (code) => {
        building = false;
        if (code === 0) broadcastReload();
        if (buildQueued) {
            buildQueued = false;
            runBuild();
        }
    });
}

const server = http.createServer((req, res) => {
    // SSE reload endpoint
    if (req.url && req.url.startsWith(RELOAD_ENDPOINT)) {
        res.writeHead(200, {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            Connection: 'keep-alive',
        });
        res.write('\n');
        sseClients.add(res);
        req.on('close', () => {
            sseClients.delete(res);
        });
        return;
    }

    // 移除查询参数 (如 ?v=...)
    const url = new URL(req.url, `http://localhost:${activePort}`);
    let targetPath = path.join(ROOT, url.pathname);

    // 如果路径是目录，尝试访问 index.html
    if (fs.existsSync(targetPath) && fs.statSync(targetPath).isDirectory()) {
        targetPath = path.join(targetPath, 'index.html');
    }

    const ext = path.extname(targetPath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(targetPath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
            return;
        }
        // inject live-reload for HTML only
        if (ext === '.html') {
            const html = injectLiveReload(String(data));
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(html);
            return;
        }
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    });
});

let activePort = DEFAULT_PORT;
function logListening() {
    console.log(`\x1b[32m✔ Documentation server started at http://localhost:${activePort}\x1b[0m`);
    console.log(`\x1b[36mℹ Serving files from: ${ROOT}\x1b[0m`);
    console.log(`\x1b[33mℹ Press Ctrl+C to stop.\x1b[0m`);
}

server.on('error', (err) => {
    if (err && err.code === 'EADDRINUSE') {
        activePort += 1;
        server.listen(activePort, logListening);
        return;
    }
    throw err;
});

server.listen(activePort, logListening);

// Watch sources and rebuild on change (ignore generated outputs to avoid loops)
const watcher = chokidar.watch(
    [
        path.join(WATCH_ROOT, 'zh'),
        path.join(WATCH_ROOT, 'en'),
        path.join(WATCH_ROOT, 'styles'),
        path.join(WATCH_ROOT, 'book.json'),
        path.join(WATCH_ROOT, 'zh', 'SUMMARY.md'),
        path.join(WATCH_ROOT, 'en', 'SUMMARY.md'),
    ],
    {
        ignoreInitial: true,
        awaitWriteFinish: { stabilityThreshold: 200, pollInterval: 50 },
    },
);

let debounceTimer = null;
function scheduleBuild() {
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => runBuild(), 200);
}

watcher.on('add', scheduleBuild);
watcher.on('change', scheduleBuild);
watcher.on('unlink', scheduleBuild);
