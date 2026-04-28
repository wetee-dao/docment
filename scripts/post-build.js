import fs from 'fs';
import path from 'path';

const bookDir = path.resolve('_book');
const faviconSrc = path.resolve('favicon.ico');
const faviconDest = path.join(bookDir, 'favicon.ico');

// Ensure favicon is available in generated book root
if (fs.existsSync(bookDir) && fs.existsSync(faviconSrc)) {
    fs.copyFileSync(faviconSrc, faviconDest);
}

// 1. 创建自动跳转的 index.html
const redirectHtml = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Redirecting...</title>
    <script>
        var lang = navigator.language || navigator.userLanguage;
        if (lang.indexOf('zh') !== -1) {
            window.location.href = 'zh/index.html';
        } else {
            window.location.href = 'en/index.html';
        }
    </script>
</head>
<body>
    <p>If you are not redirected, <a href="en/index.html">click here</a>.</p>
</body>
</html>
`;

if (fs.existsSync(bookDir)) {
    fs.writeFileSync(path.join(bookDir, 'index.html'), redirectHtml);
}

// 2. 注入自定义内容
function injectCustomContent(dir) {
    const items = fs.readdirSync(dir);
    items.forEach(item => {
        const fullPath = path.join(dir, item);
        if (fs.statSync(fullPath).isDirectory()) {
            injectCustomContent(fullPath);
        } else if (item.endsWith('.html')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            
            const isEn = fullPath.includes(path.join(bookDir, 'en'));
            const currentLang = isEn ? 'en' : 'zh';
            const targetLang = isEn ? 'zh' : 'en';
            
            // --- 注入 CSS ---
            const relativeToBookRoot = path.relative(path.dirname(fullPath), bookDir).replace(/\\/g, '/');
            const cssPath = (relativeToBookRoot ? relativeToBookRoot + '/' : '') + 'styles/website.css';
            const version = Date.now();
            const cssLink = `\n    <link rel="stylesheet" href="${cssPath}?v=${version}">`;

            // 移除旧的自定义 CSS 链接 (如果存在)
            content = content.replace(/<link rel="stylesheet" href="[^"]*styles\/website\.css[^"]*">/gi, '');
            // 在 </head> 前注入
            content = content.replace(/<\/head>/i, `${cssLink}\n</head>`);

            // --- 注入 favicon ---
            const faviconPath = (relativeToBookRoot ? relativeToBookRoot + '/' : '') + 'favicon.ico';
            const faviconLink = `\n    <link rel="icon" href="${faviconPath}?v=${version}">`;
            // 移除旧的 favicon (如果存在)
            content = content.replace(/<link[^>]+rel=["']icon["'][^>]*>/gi, '');
            content = content.replace(/<\/head>/i, `${faviconLink}\n</head>`);
            
            // --- 注入语言切换器 (右上角版本) ---
            const relativePathFromLangRoot = fullPath.split(path.join(bookDir, currentLang) + path.sep)[1] || 'index.html';
            const depth = relativePathFromLangRoot.split(path.sep).length - 1;
            const backToRoot = depth > 0 ? '../'.repeat(depth) : '';
            const targetPath = `${backToRoot}../${targetLang}/${relativePathFromLangRoot.replace(/\\/g, '/')}`;
            
            const switcherLabel = isEn ? '中文' : 'EN';
            const switcherHtml = `
            <a href="${targetPath}" class="custom-lang-switcher">
                <i class="fa fa-globe"></i> ${switcherLabel}
            </a>
            `;
            
            // 移除旧的切换器 (包括旧侧边栏版和旧右上角版)
            content = content.replace(/<li class="chapter">[\s\S]*?fa-globe[\s\S]*?<\/li>\s*<li class="divider"><\/li>/g, '');
            content = content.replace(/<a href="[^"]*" class="custom-lang-switcher">[\s\S]*?<\/a>/g, '');

            // 注入到 .book-header 中 (HonKit 的顶部工具栏)
            if (content.includes('<div class="book-header"')) {
                // 在 book-header 结束前注入
                content = content.replace(/<\/div>\s*<!-- Actions -->/i, `${switcherHtml}</div><!-- Actions -->`);
                // 如果没有 Actions 注释，尝试直接注入到 book-header 内部最后
                if (!content.includes(switcherHtml)) {
                    content = content.replace(/(<div class="book-header"[^>]*>)/i, `$1${switcherHtml}`);
                }
            } else {
                // 如果没有 book-header，直接注入到 body 开头
                content = content.replace(/<body[^>]*>/i, `$&${switcherHtml}`);
            }
            
            fs.writeFileSync(fullPath, content);
        }
    });
}

console.log('Injecting custom content...');
if (fs.existsSync(path.join(bookDir, 'en'))) injectCustomContent(path.join(bookDir, 'en'));
if (fs.existsSync(path.join(bookDir, 'zh'))) injectCustomContent(path.join(bookDir, 'zh'));
