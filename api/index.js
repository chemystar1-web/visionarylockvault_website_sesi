const fs = require('fs');
const path = require('path');
const os = require('os');

// Admin credentials
const ADMIN_USER = 'admin';
const ADMIN_PASS = 'solar';
const ADMIN_TOKEN = 'vault-admin-secret-token-2026';

// Paths for reading and writing leaderboard state
const TMP_FILE = path.join(os.tmpdir(), 'leaderboard.json');
const ROOT_FILE = path.join(process.cwd(), 'leaderboard.json');

// Helper: Read Leaderboard JSON
function readLeaderboard() {
    try {
        if (fs.existsSync(TMP_FILE)) {
            const data = fs.readFileSync(TMP_FILE, 'utf8');
            return JSON.parse(data);
        } else if (fs.existsSync(ROOT_FILE)) {
            const data = fs.readFileSync(ROOT_FILE, 'utf8');
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
        fs.writeFileSync(TMP_FILE, JSON.stringify(data, null, 2), 'utf8');
        try {
            fs.writeFileSync(ROOT_FILE, JSON.stringify(data, null, 2), 'utf8');
        } catch (e) {
            // Ignored on read-only environments like Vercel serverless
        }
        return true;
    } catch (err) {
        console.error('Error writing leaderboard file:', err);
        return false;
    }
}

// Helper: Parse Request Body
function parseJsonBody(req) {
    return new Promise((resolve, reject) => {
        if (req.body && typeof req.body === 'object') {
            resolve(req.body);
            return;
        }
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
            try {
                resolve(body ? JSON.parse(body) : {});
            } catch (err) {
                resolve({});
            }
        });
        req.on('error', err => reject(err));
    });
}

module.exports = async function handler(req, res) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

    if (req.method === 'OPTIONS') {
        if (typeof res.status === 'function') {
            return res.status(204).end();
        }
        res.writeHead(204);
        return res.end();
    }

    const sendJson = (status, obj) => {
        if (typeof res.status === 'function') {
            return res.status(status).json(obj);
        }
        res.writeHead(status, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(obj));
    };

    const url = req.url || '';
    const reqPath = url.split('?')[0];

    // GET /api/leaderboard
    if (reqPath.endsWith('/leaderboard') || reqPath.endsWith('/leaderboard/')) {
        const leaderboard = readLeaderboard();
        return sendJson(200, { success: true, leaderboard });
    }

    // POST /api/complete
    if (reqPath.endsWith('/complete') || reqPath.endsWith('/complete/')) {
        try {
            const body = await parseJsonBody(req);
            const { teamId, teamName, completionTime } = body;
            if (!teamId || !completionTime) {
                return sendJson(400, { success: false, message: 'Missing teamId or completionTime' });
            }

            const leaderboard = readLeaderboard();
            leaderboard[teamId] = {
                teamId: teamId.toString(),
                teamName: teamName || `Team ${teamId}`,
                completionTime,
                timestamp: new Date().toISOString()
            };
            saveLeaderboard(leaderboard);

            return sendJson(200, { success: true, leaderboard });
        } catch (err) {
            return sendJson(400, { success: false, message: 'Invalid JSON payload' });
        }
    }

    // POST /api/admin/login
    if (reqPath.endsWith('/admin/login') || reqPath.endsWith('/admin/login/')) {
        try {
            const body = await parseJsonBody(req);
            const { username, password } = body;

            if (username === ADMIN_USER && password === ADMIN_PASS) {
                return sendJson(200, { success: true, token: ADMIN_TOKEN });
            } else {
                return sendJson(401, { success: false, message: 'Invalid username or password' });
            }
        } catch (err) {
            return sendJson(400, { success: false, message: 'Invalid payload' });
        }
    }

    // POST /api/admin/update-time
    if (reqPath.endsWith('/admin/update-time') || reqPath.endsWith('/admin/update-time/')) {
        try {
            const body = await parseJsonBody(req);
            const { token, teamId, completionTime } = body;

            if (token !== ADMIN_TOKEN) {
                return sendJson(403, { success: false, message: 'Unauthorized' });
            }

            const leaderboard = readLeaderboard();
            if (leaderboard[teamId]) {
                leaderboard[teamId].completionTime = completionTime;
                saveLeaderboard(leaderboard);
                return sendJson(200, { success: true, leaderboard });
            } else {
                return sendJson(404, { success: false, message: 'Team record not found' });
            }
        } catch (err) {
            return sendJson(400, { success: false, message: 'Invalid payload' });
        }
    }

    // POST /api/admin/delete
    if (reqPath.endsWith('/admin/delete') || reqPath.endsWith('/admin/delete/')) {
        try {
            const body = await parseJsonBody(req);
            const { token, teamId } = body;

            if (token !== ADMIN_TOKEN) {
                return sendJson(403, { success: false, message: 'Unauthorized' });
            }

            const leaderboard = readLeaderboard();
            if (leaderboard[teamId]) {
                delete leaderboard[teamId];
                saveLeaderboard(leaderboard);
                return sendJson(200, { success: true, leaderboard });
            } else {
                return sendJson(404, { success: false, message: 'Team record not found' });
            }
        } catch (err) {
            return sendJson(400, { success: false, message: 'Invalid payload' });
        }
    }

    // POST /api/admin/reset
    if (reqPath.endsWith('/admin/reset') || reqPath.endsWith('/admin/reset/')) {
        try {
            const body = await parseJsonBody(req);
            const { token } = body;

            if (token !== ADMIN_TOKEN) {
                return sendJson(403, { success: false, message: 'Unauthorized' });
            }

            saveLeaderboard({});
            return sendJson(200, { success: true, leaderboard: {} });
        } catch (err) {
            return sendJson(400, { success: false, message: 'Invalid payload' });
        }
    }

    return sendJson(404, { error: 'Endpoint not found', path: reqPath });
};
