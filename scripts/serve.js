import http from 'http';
import fs from 'fs';
import path from 'path';

const PORT = 4000;
const ROOT = path.resolve('_book');

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

const server = http.createServer((req, res) => {
    // 移除查询参数 (如 ?v=...)
    const url = new URL(req.url, `http://localhost:${PORT}`);
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
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    });
});

console.log(`\x1b[32m✔ Documentation server started at http://localhost:${PORT}\x1b[0m`);
console.log(`\x1b[36mℹ Serving files from: ${ROOT}\x1b[0m`);
console.log(`\x1b[33mℹ Press Ctrl+C to stop.\x1b[0m`);

server.listen(PORT);
