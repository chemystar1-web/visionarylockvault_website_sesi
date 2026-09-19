const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '0.0.0.0';
const ROOT = __dirname;
const LEADERBOARD_FILE = path.join(ROOT, 'leaderboard.json');

// Admin credentials
const ADMIN_USER = 'admin';
const ADMIN_PASS = 'solar';
const ADMIN_TOKEN = 'vault-admin-secret-token-2026';

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.webp': 'image/webp',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf'
};

// Helper: Read Leaderboard JSON
function readLeaderboard() {
    try {
        if (fs.existsSync(LEADERBOARD_FILE)) {
            const data = fs.readFileSync(LEADERBOARD_FILE, 'utf8');
            return JSON.parse(data);
        }
    } catch (err) {
        console.error('Error reading leaderboard file:', err);
    }
    return {};
}

// Helper: Save Leaderboard JSON
function saveLeaderboard(data) {
    try {
        fs.writeFileSync(LEADERBOARD_FILE, JSON.stringify(data, null, 2), 'utf8');
        return true;
    } catch (err) {
        console.error('Error writing leaderboard file:', err);
        return false;
    }
}

// Helper: Parse JSON Body
function parseJsonBody(req) {
    return new Promise((resolve, reject) => {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
            try {
                resolve(body ? JSON.parse(body) : {});
            } catch (err) {
                reject(err);
            }
        });
        req.on('error', err => reject(err));
    });
}

const apiHandler = require('./api/index.js');

const server = http.createServer(async (req, res) => {
    // Parse URL
    let reqUrl;
    try {
        reqUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    } catch {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: '400 Bad Request' }));
        return;
    }

    let reqPath = decodeURIComponent(reqUrl.pathname);

    // --- API ROUTES ---
    if (reqPath.startsWith('/api/')) {
        await apiHandler(req, res);
        return;
    }

    // --- STATIC FILES ROUTING ---
    if (reqPath === '/' || reqPath === '') {
        reqPath = '/index.html';
    }

    const safePath = path.normalize(reqPath).replace(/^(\.\.[\/\\])+/, '');
    const filePath = path.join(ROOT, safePath);

    if (!filePath.startsWith(ROOT)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        res.end('403 Forbidden');
        return;
    }

    fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
            return;
        }

        const ext = path.extname(filePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';

        res.writeHead(200, {
            'Content-Type': contentType,
            'Cache-Control': 'no-cache',
            'Access-Control-Allow-Origin': '*'
        });

        const stream = fs.createReadStream(filePath);
        stream.pipe(res);
        stream.on('error', (streamErr) => {
            console.error('Stream error:', streamErr);
            if (!res.headersSent) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('500 Internal Server Error');
            }
        });
    });
});

server.listen(PORT, HOST, () => {
    console.log('====================================================');
    console.log('  The Vault Web Server is running!');
    console.log(`  Local:            http://localhost:${PORT}`);
    console.log(`  Loopback IP:      http://127.0.0.1:${PORT}`);
    console.log('====================================================');
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log('====================================================');
        console.log(`  Port ${PORT} is already in use.`);
        console.log(`  Local:            http://localhost:${PORT}`);
        console.log('====================================================');
        process.exit(0);
    } else {
        console.error('Server error:', err);
        process.exit(1);
    }
});
