// Configuration for the Teams and their specific puzzles/keys
// Each team has 4 challenges: logical (Digit 1), visual+image (Digit 2), physical (Digit 3), vaultKey (Digit 4)
// All vault codes are 4 digits.
const teamsConfig = {
    1: {
        name: "Team 1",
        logical: "Solve for x: 4(x − 2) − 3(x − 1) = 2",
        visual: "A number decreases by 10% to give 90. Find 1% of the original number.",
        physical: "Starting at her house facing North, Priya walks a sequence of legs: Walks 9 km (facing North). Turns left, walks 2 km. Turns left, walks 4 km. Turns right, walks 9 km. Turns left, walks 5 km. Turns left, walks 4 km. What is the shortest distance (km, rounded to nearest whole number) between her final position and the start? (If more than 9, give the last digit.)",
        vaultKey: "A fruit punch contains orange juice and pineapple juice in the ratio 5:3. After 4 L of pineapple juice is added, the ratio becomes 5:4. Find the original quantity of orange juice (in liters). (If more than 9, give the last digit.)",
        key: "7170"
    },
    2: {
        name: "Team 2",
        logical: "Solve for x: (x + 2)/2 + (x + 2)/4 = 6",
        visual: "A sum of ₹200 grows to ₹236 in a year at simple interest. Find 10% of the interest earned (rounded).",
        physical: "Starting at her house facing North, Priya walks: Walks 3 km (facing North). Turns right, walks 3 km. Turns left, walks 5 km. Turns left, walks 4 km. Turns left, walks 3 km. Turns left, walks 7 km. Turns right, walks 2 km. What is the shortest distance (km, rounded to nearest whole number) between her final position and the start? (If more than 9, give the last digit.)",
        vaultKey: "A school has boys and girls in the ratio 7:5. When 12 girls join, the ratio becomes 7:6. How many students were there originally? (If more than 9, give the last digit.)",
        key: "6474"
    },
    3: {
        name: "Team 3",
        logical: "Solve for x: 2(3x − 1) − 3(x − 2) = 10",
        visual: "A number is 20% more than 15. Find 20% of the larger number (rounded).",
        physical: "Starting at her house facing North, Priya walks: Walks 2 km (facing North). Turns right, walks 2 km. Turns right, walks 7 km. Turns left, walks 1 km. Turns left, walks 4 km. What is the shortest distance (km, rounded to nearest whole number) between her final position and the start? (If more than 9, give the last digit.)",
        vaultKey: "A bag contains red and blue beads in the ratio 4:7. After 10 red beads are added, the ratio becomes 2:3. How many beads were originally in the bag? (If more than 9, give the last digit.)",
        key: "2435"
    },
    4: {
        name: "Team 4",
        logical: "Solve for x: (2x + 1)/3 + (x − 2)/2 = 4",
        visual: "60% of a class of 45 students passed. Find the number of failed students divided by 3.",
        physical: "Starting at her house facing North, Priya walks: Walks 7 km (facing North). Turns right, walks 4 km. Turns left, walks 5 km. Turns right, walks 1 km. Turns left, walks 3 km. What is the shortest distance (km, rounded to nearest whole number) between her final position and the start? (If more than 9, give the last digit.)",
        vaultKey: "A paint mixture has red and white paint in the ratio 3:5. If 6 L of red paint is added, the ratio becomes 1:1. Find the original amount of paint (in liters). (If more than 9, give the last digit.)",
        key: "4664"
    },
    5: {
        name: "Team 5",
        logical: "Solve for x: 3(2x − 1) = 2(2x + 4) − 5",
        visual: "25% of a number equals 20. Find 10% of that number.",
        physical: "Starting at her house facing North, Priya walks: Walks 2 km (facing North). Turns left, walks 4 km. Turns left, walks 6 km. Turns right, walks 8 km. Turns left, walks 8 km. What is the shortest distance (km, rounded to nearest whole number) between her final position and the start? (If more than 9, give the last digit.)",
        vaultKey: "The ratio of A's money to B's money is 5:7. A gives ₹20 to B, and the ratio becomes 3:5. How much money did A have originally? (If more than 9, give the last digit.)",
        key: "3870"
    },
    6: {
        name: "Team 6",
        logical: "Solve for x: 11 − 2(x − 1) = 3x − 2",
        visual: "80% of a number is 64. Find 5% of that number.",
        physical: "Starting at her house facing North, Priya walks: Walks 9 km (facing North). Turns left, walks 7 km. Turns right, walks 3 km. Turns left, walks 9 km. Turns left, walks 1 km. What is the shortest distance (km, rounded to nearest whole number) between her final position and the start? (If more than 9, give the last digit.)",
        vaultKey: "Rice and dal are mixed in the ratio 7:3. If 8 kg of the mixture is removed and replaced by 8 kg of dal, the ratio becomes 7:5. Find the original quantity of the mixture (in kg). (If more than 9, give the last digit.)",
        key: "3498"
    },
    7: {
        name: "Team 7",
        logical: "Solve for x: x/2 + x/3 = 5",
        visual: "A number increased by 25% gives 40. Find 10% of the original number (rounded).",
        physical: "Starting at her house facing North, Priya walks: Walks 1 km (facing North). Turns left, walks 5 km. Turns right, walks 8 km. Turns left, walks 1 km. Turns left, walks 3 km. Turns right, walks 6 km. Turns left, walks 2 km. What is the shortest distance (km, rounded to nearest whole number) between her final position and the start? (If more than 9, give the last digit.)",
        vaultKey: "A class has boys and girls in the ratio 3:2. If 10 boys leave and 10 girls join, the ratio becomes 1:1. Find the original number of students. (If more than 9, give the last digit.)",
        key: "6330"
    },
    8: {
        name: "Team 8",
        logical: "Solve for x: 5(x − 2) + 3 = 3x + 1",
        visual: "A number decreased by 20% becomes 32. Find 10% of the original number.",
        physical: "Starting at her house facing North, Priya walks: Walks 1 km (facing North). Turns left, walks 8 km. Turns right, walks 7 km. Turns left, walks 5 km. Turns right, walks 4 km. Turns right, walks 1 km. What is the shortest distance (km, rounded to nearest whole number) between her final position and the start? (If more than 9, give the last digit.)",
        vaultKey: "A juice mixture contains syrup and water in the ratio 2:5. If 6 L of water is removed, the ratio becomes 1:2. Find the original quantity of the mixture (in liters). (If more than 9, give the last digit.)",
        key: "4472"
    },
    9: {
        name: "Team 9",
        logical: "Solve for x: (x + 3)/2 − (x − 1)/3 = 3",
        visual: "A student scores 72% in an exam out of 50 marks. Find 10% of the marks obtained (rounded).",
        physical: "Starting at her house facing North, Priya walks: Walks 9 km (facing North). Turns right, walks 8 km. Turns left, walks 3 km. Turns right, walks 3 km. Turns left, walks 8 km. Turns right, walks 3 km. What is the shortest distance (km, rounded to nearest whole number) between her final position and the start? (If more than 9, give the last digit.)",
        vaultKey: "Two numbers are in the ratio 5:8. If 15 is added to each number, their ratio becomes 2:3. Find the smaller number. (If more than 9, give the last digit.)",
        key: "7445"
    },
    10: {
        name: "Team 10",
        logical: "Solve for x: 2x − 3(x − 2) = −1",
        visual: "A number is increased by 10% twice, becoming 96.8. Find 5% of the original number (rounded).",
        physical: "Starting at her house facing North, Priya walks: Walks 4 km (facing North). Turns left, walks 1 km. Turns right, walks 6 km. Turns right, walks 4 km. Turns left, walks 5 km. What is the shortest distance (km, rounded to nearest whole number) between her final position and the start? (If more than 9, give the last digit.)",
        vaultKey: "A basket contains apples and oranges in the ratio 4:5. After 8 apples are removed and 5 oranges are added, the ratio becomes 2:3. Find the original number of fruits. (If more than 9, give the last digit.)",
        key: "7453"
    },
    11: {
        name: "Team 11",
        logical: "Solve for x: 6(x − 1) − 4(x − 2) = x + 3",
        visual: "Cost price of an item is ₹20. It is marked up 50% and then sold at a 40% discount. Find 10% of the final selling price (rounded).",
        physical: "Starting at her house facing North, Priya walks: Walks 1 km (facing North). Turns left, walks 2 km. Turns left, walks 9 km. Turns right, walks 4 km. Turns right, walks 5 km. Turns right, walks 8 km. What is the shortest distance (km, rounded to nearest whole number) between her final position and the start? (If more than 9, give the last digit.)",
        vaultKey: "A group of red and green balls is in the ratio 3:4. If 6 green balls are removed, the ratio becomes 3:2. How many balls were originally there? (If more than 9, give the last digit.)",
        key: "1241"
    },
    12: {
        name: "Team 12",
        logical: "Solve for x: 3(x + 2) = 2(x + 4) + 1",
        visual: "45% of x is 27. Find 10% of x, then subtract 1.",
        physical: "Starting at her house facing North, Priya walks: Walks 8 km (facing North). Turns right, walks 3 km. Turns left, walks 8 km. Turns left, walks 3 km. Turns right, walks 7 km. What is the shortest distance (km, rounded to nearest whole number) between her final position and the start? (If more than 9, give the last digit.)",
        vaultKey: "A prize is divided among A, B and C in the ratio 2:3:5. If C receives ₹240 more than A, what is the total prize? (If more than 9, give the last digit.)",
        key: "3530"
    },
    13: {
        name: "Team 13",
        logical: "Solve for x: 3x − 2(x − 3) = 3x − 2",
        visual: "75% of a number equals 9. Find 10% of that number (rounded).",
        physical: "Starting at her house facing North, Priya walks: Walks 1 km (facing North). Turns right, walks 7 km. Turns right, walks 7 km. Turns left, walks 4 km. Turns right, walks 6 km. What is the shortest distance (km, rounded to nearest whole number) between her final position and the start? (If more than 9, give the last digit.)",
        vaultKey: "A mixture contains chemical A and B in the ratio 5:2. If 9 L of B is added, the ratio becomes 5:3. Find the original quantity of A (in liters). (If more than 9, give the last digit.)",
        key: "4165"
    },
    14: {
        name: "Team 14",
        logical: "Solve for x: 3(2x + 1) − 2(3x − 1) = x − 1",
        visual: "A price rises 10%, then falls 10%. The final price is 99. Find 1% of the original price.",
        physical: "Starting at her house facing North, Priya walks: Walks 5 km (facing North). Turns right, walks 1 km. Turns right, walks 2 km. Turns left, walks 4 km. Turns left, walks 1 km. What is the shortest distance (km, rounded to nearest whole number) between her final position and the start? (If more than 9, give the last digit.)",
        vaultKey: "The ratio of boys to girls in a club is 5:4. If 10 boys and 2 girls join, the ratio becomes 3:2. Find the original total number of members. (If more than 9, give the last digit.)",
        key: "6163"
    },
    15: {
        name: "Team 15",
        logical: "Solve for x: (3x − 2)/4 = (x + 2)/2 − 1",
        visual: "30% of a number is 24. Find 10% of that number.",
        physical: "Starting at her house facing North, Priya walks: Walks 2 km (facing North). Turns left, walks 3 km. Turns left, walks 8 km. Turns right, walks 1 km. Turns right, walks 5 km. Turns right, walks 2 km. What is the shortest distance (km, rounded to nearest whole number) between her final position and the start? (If more than 9, give the last digit.)",
        vaultKey: "A shop has pens and pencils in the ratio 3:5. After selling 12 pencils and adding 6 pens, the ratio becomes 3:4. Find the original number of items. (If more than 9, give the last digit.)",
        key: "2820"
    }
};

// Global State
let timerInterval = null;
let startTime = 0;
let currentEnteredPin = "";
let timerRunning = false;
let adminToken = localStorage.getItem('vault_admin_token') || null;

// --- Custom Confirmation Modal ---
const confirmModal = document.getElementById('confirm-modal');
const confirmModalTitle = document.getElementById('confirm-modal-title');
const confirmModalMessage = document.getElementById('confirm-modal-message');
const confirmModalIcon = document.getElementById('confirm-modal-icon');
const confirmModalYes = document.getElementById('confirm-modal-yes');
const confirmModalNo = document.getElementById('confirm-modal-no');

function showConfirm({ title = 'Are you sure?', message = 'This action cannot be undone.', icon = '⚠️', yesBtnText = 'Yes, Proceed', noBtnText = 'No, Cancel' } = {}) {
    return new Promise((resolve) => {
        confirmModalTitle.textContent = title;
        confirmModalMessage.textContent = message;
        confirmModalIcon.textContent = icon;
        confirmModalYes.textContent = yesBtnText;
        confirmModalNo.textContent = noBtnText;
        confirmModal.classList.remove('hidden');

        function cleanup(result) {
            confirmModal.classList.add('hidden');
            confirmModalYes.removeEventListener('click', onYes);
            confirmModalNo.removeEventListener('click', onNo);
            confirmModal.removeEventListener('click', onBackdrop);
            resolve(result);
        }

        function onYes() { cleanup(true); }
        function onNo() { cleanup(false); }
        function onBackdrop(e) { if (e.target === confirmModal) cleanup(false); }

        confirmModalYes.addEventListener('click', onYes);
        confirmModalNo.addEventListener('click', onNo);
        confirmModal.addEventListener('click', onBackdrop);
    });
}

// DOM Elements
const timerDisplay = document.getElementById('global-timer');
const finalTimerDisplay = document.getElementById('final-timer-display');
const navButtons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.section');

// Team Selection Elements
const teamSelectionOverlay = document.getElementById('team-selection-overlay');
const mainApp = document.getElementById('main-app');
const selectTeamBtns = document.querySelectorAll('.select-team-btn');
const btnSignOut = document.getElementById('btn-sign-out');

// Team Section Elements
const teamTitle = document.getElementById('team-title');
const puzzleLogical = document.getElementById('puzzle-logical');
const puzzleVisual = document.getElementById('puzzle-visual');
const puzzleVisualImage = document.getElementById('puzzle-visual-image');
const puzzlePhysical = document.getElementById('puzzle-physical');
const puzzleKey = document.getElementById('puzzle-key');

// Vault Elements
const pinBoxes = [
    document.getElementById('pin-1'),
    document.getElementById('pin-2'),
    document.getElementById('pin-3'),
    document.getElementById('pin-4')
];
const keyBtns = document.querySelectorAll('.key-btn[data-val]');
const btnClear = document.getElementById('btn-clear');
const btnEnter = document.getElementById('btn-enter');
const errorMessage = document.getElementById('error-message');
const vaultDoor = document.getElementById('vault-door');
const vaultStatusText = document.getElementById('vault-status-text');

// Success Overlay Elements
const successOverlay = document.getElementById('success-overlay');
const winningTeamText = document.getElementById('winning-team-text');
const btnReset = document.getElementById('btn-reset');

// Admin Elements
const btnOverlayAdmin = document.getElementById('btn-overlay-admin');
const btnHeaderAdmin = document.getElementById('btn-header-admin');
const adminModal = document.getElementById('admin-modal');
const btnCloseAdmin = document.getElementById('btn-close-admin');
const adminLoginView = document.getElementById('admin-login-view');
const adminDashboardView = document.getElementById('admin-dashboard-view');
const adminLoginForm = document.getElementById('admin-login-form');
const adminUserInput = document.getElementById('admin-user');
const adminPassInput = document.getElementById('admin-pass');
const adminLoginError = document.getElementById('admin-login-error');
const btnAdminLogout = document.getElementById('btn-admin-logout');
const leaderboardTbody = document.getElementById('leaderboard-tbody');
const btnRefreshLeaderboard = document.getElementById('btn-refresh-leaderboard');
const btnResetLeaderboard = document.getElementById('btn-reset-leaderboard');
const btnAdminResetTimer = document.getElementById('btn-admin-reset-timer');
const adminTeamSelect = document.getElementById('admin-team-select');

// --- Timer Logic ---
function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function updateTimer() {
    const now = Date.now();
    const elapsed = now - startTime;
    timerDisplay.textContent = formatTime(elapsed);
}

function startTimer(teamId) {
    stopTimer();

    let savedStartTime = localStorage.getItem(`vault_team_${teamId}_start_time`);
    if (!savedStartTime) {
        savedStartTime = Date.now().toString();
        localStorage.setItem(`vault_team_${teamId}_start_time`, savedStartTime);
    }

    startTime = parseInt(savedStartTime, 10);
    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);
    timerRunning = true;
}

function stopTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
    return timerDisplay.textContent;
}

// --- Navigation Logic ---
function switchSection(targetId, teamId = null) {
    navButtons.forEach(btn => btn.classList.remove('active'));

    const activeBtn = Array.from(navButtons).find(btn => {
        if (teamId) return btn.getAttribute('data-team') == teamId;
        return btn.getAttribute('data-target') === targetId;
    });
    if (activeBtn) activeBtn.classList.add('active');

    sections.forEach(sec => sec.classList.remove('active'));
    document.getElementById(targetId).classList.add('active');

    if (targetId === 'team-section' && teamId) {
        loadTeamContent(teamId);
    }
}

function loadTeamContent(teamId) {
    const team = teamsConfig[teamId];
    if (!team) return;

    teamTitle.textContent = `${team.name} Protocol`;
    puzzleLogical.textContent = team.logical;
    puzzleVisual.textContent = team.visual;
    puzzlePhysical.textContent = team.physical;
    puzzleKey.textContent = team.vaultKey;

    if (team.visualImage) {
        puzzleVisualImage.src = team.visualImage;
        puzzleVisualImage.classList.remove('hidden');
    } else {
        puzzleVisualImage.classList.add('hidden');
        puzzleVisualImage.src = "";
    }
}

navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-target');
        const team = btn.getAttribute('data-team');
        switchSection(target, team);
    });
});

// --- Sign Out Logic ---
function signOut() {
    localStorage.removeItem('vault_active_team');
    stopTimer();
    startTime = 0;
    timerDisplay.textContent = "00:00:00";
    handleClear();

    teamSelectionOverlay.classList.remove('hidden');
    mainApp.classList.add('hidden');
    navButtons.forEach(btn => btn.classList.remove('active'));
}

btnSignOut.addEventListener('click', signOut);

// --- Vault Logic ---
function updatePinDisplay() {
    for (let i = 0; i < 4; i++) {
        pinBoxes[i].textContent = currentEnteredPin[i] || "";
        pinBoxes[i].classList.remove('active', 'error', 'success');

        if (i === currentEnteredPin.length) {
            pinBoxes[i].classList.add('active');
        }
    }
    errorMessage.textContent = "";
}

function handleKeyPress(val) {
    if (currentEnteredPin.length < 4) {
        currentEnteredPin += val;
        updatePinDisplay();
    }
}

function handleClear() {
    currentEnteredPin = "";
    updatePinDisplay();
    pinBoxes.forEach(box => box.classList.remove('error'));
}

function triggerError() {
    pinBoxes.forEach(box => box.classList.add('error'));
    errorMessage.textContent = "ACCESS DENIED. INCORRECT KEY.";
    setTimeout(() => {
        handleClear();
    }, 1000);
}

function triggerSuccess(winningTeamName) {
    pinBoxes.forEach(box => box.classList.add('success'));
    errorMessage.style.color = "var(--success)";
    errorMessage.textContent = "ACCESS GRANTED.";

    vaultDoor.classList.add('unlocking');

    setTimeout(() => {
        vaultDoor.classList.remove('unlocking');
        vaultDoor.classList.add('open');
        vaultStatusText.textContent = "UNLOCKED";

        const finalTime = stopTimer();

        // Send completion time to Server API
        const activeTeamId = localStorage.getItem('vault_active_team');
        if (activeTeamId) {
            fetch('/api/complete', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    teamId: activeTeamId,
                    teamName: winningTeamName,
                    completionTime: finalTime
                })
            }).catch(err => console.error('Failed to report completion time:', err));
        }

        setTimeout(() => {
            winningTeamText.textContent = `${winningTeamName} successfully breached the vault!`;
            finalTimerDisplay.textContent = finalTime;
            successOverlay.classList.remove('hidden');
            setTimeout(() => {
                successOverlay.classList.add('show');
            }, 50);
        }, 1500);

    }, 1000);
}

function handleEnter() {
    if (currentEnteredPin.length !== 4) {
        errorMessage.textContent = "PLEASE ENTER 4 DIGITS.";
        return;
    }

    const activeTeamId = localStorage.getItem('vault_active_team');
    let matchedTeam = null;

    if (activeTeamId && teamsConfig[activeTeamId]) {
        if (teamsConfig[activeTeamId].key === currentEnteredPin) {
            matchedTeam = teamsConfig[activeTeamId];
        }
    } else {
        for (const [id, team] of Object.entries(teamsConfig)) {
            if (team.key === currentEnteredPin) {
                matchedTeam = team;
                break;
            }
        }
    }

    if (matchedTeam) {
        triggerSuccess(matchedTeam.name);
    } else {
        triggerError();
    }
}

keyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        handleKeyPress(btn.getAttribute('data-val'));
    });
});

btnClear.addEventListener('click', handleClear);
btnEnter.addEventListener('click', handleEnter);

document.addEventListener('keydown', (e) => {
    if (!document.getElementById('vault-section').classList.contains('active')) return;
    if (!successOverlay.classList.contains('hidden')) return;
    if (!adminModal.classList.contains('hidden')) return;

    if (e.key >= '0' && e.key <= '9') {
        handleKeyPress(e.key);
    } else if (e.key === 'Backspace' || e.key === 'Delete') {
        currentEnteredPin = currentEnteredPin.slice(0, -1);
        updatePinDisplay();
    } else if (e.key === 'Enter') {
        handleEnter();
    }
});

// --- Reset Logic ---
btnReset.addEventListener('click', () => {
    successOverlay.classList.remove('show');
    setTimeout(() => {
        successOverlay.classList.add('hidden');

        const activeTeamId = localStorage.getItem('vault_active_team');
        if (activeTeamId) {
            localStorage.removeItem(`vault_team_${activeTeamId}_start_time`);
        }
        localStorage.removeItem('vault_active_team');

        vaultDoor.classList.remove('open');
        vaultStatusText.textContent = "SECURE";
        vaultStatusText.style.color = "var(--danger)";

        handleClear();
        errorMessage.style.color = "var(--danger)";

        stopTimer();
        startTime = 0;
        timerDisplay.textContent = "00:00:00";

        teamSelectionOverlay.classList.remove('hidden');
        mainApp.classList.add('hidden');
        navButtons.forEach(btn => btn.classList.remove('active'));
    }, 1000);
});

// --- Team Selection Logic ---
function selectTeam(teamId) {
    localStorage.setItem('vault_active_team', teamId);

    teamSelectionOverlay.classList.add('hidden');
    mainApp.classList.remove('hidden');

    navButtons.forEach(navBtn => {
        if (navBtn.classList.contains('vault-btn') || navBtn.getAttribute('data-team') == teamId) {
            navBtn.style.display = '';
        } else {
            navBtn.style.display = 'none';
        }
    });

    switchSection('team-section', teamId);
    updatePinDisplay();
    startTimer(teamId);
}

selectTeamBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const teamId = btn.getAttribute('data-team');
        selectTeam(teamId);
    });
});

// --- Admin Panel Logic ---
function openAdminModal() {
    adminModal.classList.remove('hidden');
    if (adminToken) {
        adminLoginView.classList.add('hidden');
        adminDashboardView.classList.remove('hidden');
        fetchAndRenderLeaderboard();
    } else {
        adminLoginView.classList.remove('hidden');
        adminDashboardView.classList.add('hidden');
        adminLoginError.textContent = "";
    }
}

function closeAdminModal() {
    adminModal.classList.add('hidden');
}

btnOverlayAdmin.addEventListener('click', openAdminModal);
btnHeaderAdmin.addEventListener('click', openAdminModal);
btnCloseAdmin.addEventListener('click', closeAdminModal);

adminLoginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = adminUserInput.value.trim();
    const password = adminPassInput.value.trim();

    try {
        const res = await fetch('/api/admin/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const data = await res.json();

        if (data.success) {
            adminToken = data.token;
            localStorage.setItem('vault_admin_token', adminToken);
            adminLoginView.classList.add('hidden');
            adminDashboardView.classList.remove('hidden');
            fetchAndRenderLeaderboard();
        } else {
            adminLoginError.textContent = data.message || "Invalid credentials.";
        }
    } catch (err) {
        adminLoginError.textContent = "Server error. Failed to authenticate.";
    }
});

btnAdminLogout.addEventListener('click', async () => {
    const confirmed = await showConfirm({
        title: 'Logout Admin?',
        message: 'You will be logged out of the admin panel and returned to the login screen.',
        icon: '🔐',
        yesBtnText: 'Yes, Logout',
        noBtnText: 'No, Stay'
    });
    if (!confirmed) return;

    adminToken = null;
    localStorage.removeItem('vault_admin_token');
    adminLoginView.classList.remove('hidden');
    adminDashboardView.classList.add('hidden');
    adminUserInput.value = "";
    adminPassInput.value = "";
    adminLoginError.textContent = "";
});

async function fetchAndRenderLeaderboard() {
    try {
        const res = await fetch('/api/leaderboard');
        const data = await res.json();
        const leaderboard = data.leaderboard || {};
        const entries = Object.values(leaderboard);

        leaderboardTbody.innerHTML = "";

        if (entries.length === 0) {
            leaderboardTbody.innerHTML = `<tr><td colspan="4" class="empty-msg">No completion records found yet.</td></tr>`;
            return;
        }

        // Sort by completion time (fastest first: parse HH:MM:SS to total seconds)
        function timeToSeconds(t) {
            if (!t || typeof t !== 'string') return Infinity;
            const parts = t.split(':').map(Number);
            if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
            if (parts.length === 2) return parts[0] * 60 + parts[1];
            return Infinity;
        }
        entries.sort((a, b) => timeToSeconds(a.completionTime) - timeToSeconds(b.completionTime));

        entries.forEach(entry => {
            const tr = document.createElement('tr');
            const dateStr = entry.timestamp ? new Date(entry.timestamp).toLocaleTimeString() : 'N/A';

            tr.innerHTML = `
                <td><strong>${entry.teamName || 'Team ' + entry.teamId}</strong></td>
                <td>
                    <input type="text" class="edit-time-input" data-team="${entry.teamId}" value="${entry.completionTime || '00:00:00'}">
                </td>
                <td>${dateStr}</td>
                <td>
                    <button class="small-btn save-time-btn" data-team="${entry.teamId}">Save</button>
                    <button class="small-btn danger delete-team-btn" data-team="${entry.teamId}">Delete</button>
                </td>
            `;
            leaderboardTbody.appendChild(tr);
        });

        // Add event listeners for Save and Delete buttons
        document.querySelectorAll('.save-time-btn').forEach(btn => {
            btn.addEventListener('click', async () => {
                const teamId = btn.getAttribute('data-team');
                const inputEl = document.querySelector(`.edit-time-input[data-team="${teamId}"]`);
                const newTime = inputEl ? inputEl.value.trim() : "";

                if (!newTime) return;

                const res = await fetch('/api/admin/update-time', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ token: adminToken, teamId, completionTime: newTime })
                });
                const updateData = await res.json();
                if (updateData.success) {
                    alert(`Updated completion time for Team ${teamId} to ${newTime}`);
                    fetchAndRenderLeaderboard();
                } else {
                    alert(`Failed to update: ${updateData.message}`);
                }
            });
        });

        document.querySelectorAll('.delete-team-btn').forEach(btn => {
            btn.addEventListener('click', async () => {
                const teamId = btn.getAttribute('data-team');
                const confirmed = await showConfirm({
                    title: 'Delete Record?',
                    message: `This will permanently delete the completion record for Team ${teamId}. This cannot be undone.`,
                    icon: '🗑️',
                    yesBtnText: 'Yes, Delete',
                    noBtnText: 'No, Keep'
                });
                if (!confirmed) return;

                const res = await fetch('/api/admin/delete', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ token: adminToken, teamId })
                });
                const delData = await res.json();
                if (delData.success) {
                    fetchAndRenderLeaderboard();
                } else {
                    alert(`Failed to delete: ${delData.message}`);
                }
            });
        });

    } catch (err) {
        leaderboardTbody.innerHTML = `<tr><td colspan="4" class="empty-msg">Failed to load leaderboard data.</td></tr>`;
    }
}

btnRefreshLeaderboard.addEventListener('click', fetchAndRenderLeaderboard);

btnResetLeaderboard.addEventListener('click', async () => {
    const confirmed = await showConfirm({
        title: 'Reset All Records?',
        message: 'CAUTION: This will permanently delete ALL team completion records from the leaderboard. This cannot be undone.',
        icon: '🚨',
        yesBtnText: 'Yes, Reset All',
        noBtnText: 'No, Cancel'
    });
    if (!confirmed) return;

    try {
        const res = await fetch('/api/admin/reset', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token: adminToken })
        });
        const data = await res.json();
        if (data.success) {
            fetchAndRenderLeaderboard();
        } else {
            alert(`Reset failed: ${data.message}`);
        }
    } catch (err) {
        alert("Server error during reset.");
    }
});

// Admin Timer Reset Action
if (btnAdminResetTimer) {
    btnAdminResetTimer.addEventListener('click', async () => {
        const targetVal = adminTeamSelect ? adminTeamSelect.value : 'current';
        const activeTeamId = localStorage.getItem('vault_active_team');

        let confirmTitle, confirmMsg;
        if (targetVal === 'all') {
            confirmTitle = 'Reset All Timers?';
            confirmMsg = 'This will reset the timer for ALL 15 teams. Their elapsed time will restart from zero.';
        } else if (targetVal === 'current') {
            const tName = activeTeamId ? (teamsConfig[activeTeamId]?.name || 'Team ' + activeTeamId) : 'the current active team';
            confirmTitle = 'Reset Timer?';
            confirmMsg = `This will reset the timer for ${tName}. Their elapsed time will restart from zero.`;
        } else {
            confirmTitle = 'Reset Timer?';
            confirmMsg = `This will reset the timer for Team ${targetVal}. Their elapsed time will restart from zero.`;
        }

        const confirmed = await showConfirm({
            title: confirmTitle,
            message: confirmMsg,
            icon: '⏱️',
            yesBtnText: 'Yes, Reset',
            noBtnText: 'No, Cancel'
        });
        if (!confirmed) return;

        if (targetVal === 'all') {
            for (let i = 1; i <= 15; i++) {
                localStorage.removeItem(`vault_team_${i}_start_time`);
            }
            if (activeTeamId) {
                stopTimer();
                startTime = 0;
                startTimer(activeTeamId);
            }
        } else if (targetVal === 'current') {
            if (activeTeamId) {
                localStorage.removeItem(`vault_team_${activeTeamId}_start_time`);
                stopTimer();
                startTime = 0;
                startTimer(activeTeamId);
            }
        } else {
            const teamId = targetVal;
            localStorage.removeItem(`vault_team_${teamId}_start_time`);
            if (activeTeamId == teamId) {
                stopTimer();
                startTime = 0;
                startTimer(teamId);
            }
        }
    });
}

// --- Initialization ---
function init() {
    const savedActiveTeam = localStorage.getItem('vault_active_team');
    if (savedActiveTeam) {
        selectTeam(savedActiveTeam);
    } else {
        teamSelectionOverlay.classList.remove('hidden');
        mainApp.classList.add('hidden');
    }
}

document.addEventListener('DOMContentLoaded', init);
