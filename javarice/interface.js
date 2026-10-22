function updateCounters() {
    achievedSpan.textContent = `PASS: ${achieved}`;
    failedSpan.textContent = `FAILED: ${failed}`;
    totalSpan.textContent = `PRESCRIPTS: ${total}`;

    // Save states persistently
    localStorage.setItem("city_achieved", achieved);
    localStorage.setItem("city_failed", failed);
    localStorage.setItem("city_total", total);
    localStorage.setItem("city_chances", remainingChances);
}

function showPlayButton() {
    buttonContainer.innerHTML = `<button id="startBtn">Next</button>`;
    document.getElementById("startBtn").addEventListener("click", handlePlayClick);
}

function showResultText(text) {
    canResolve = false;
    scrambleReveal(text, 0.3, 0.8, t => display.textContent = t, showPlayButton);
}

function showResultTextIntro(text) {
    scrambleReveal(text, 0.3, 0.8, t => display.textContent = t);
}

function showResultButtons() {
    canResolve = false;

    buttonContainer.innerHTML = `
        <button id="achievedBtn" disabled>Pass</button>
        <button id="failedBtn" disabled>Failed</button>
    `;

    // PASS (CLEAR) MECHANIC: 24-Hour Lockout
    document.getElementById("achievedBtn").onclick = () => {
        if (!canResolve) return;
        achieved++;
        total++;
        remainingChances = 3; // Reset chances on success

        // Lock out for 24 hours
        const lockoutUntil = Date.now() + (24 * 60 * 60 * 1000);
        localStorage.setItem("city_lockout", lockoutUntil);

        updateCounters();
        buttonContainer.innerHTML = "";
        showResultText("CLEAR. THE CITY GRANTS YOU REST. RETURN IN 24 HOURS.");
    };

    // FAILED MECHANIC: 3 Chances before Total Wipe
    document.getElementById("failedBtn").onclick = () => {
        if (!canResolve) return;
        failed++;
        total++;
        remainingChances--;

        if (remainingChances > 0) {
            updateCounters();
            buttonContainer.innerHTML = "";
            showResultText(`FAILED. WARNING: ${remainingChances} CHANCE(S) REMAINING.`);
        } else {
            // PUNISHMENT: Reset all stats to zero and clear lockout
            achieved = 0;
            failed = 0;
            total = 0;
            remainingChances = 3;
            localStorage.removeItem("city_lockout");
            updateCounters();
            buttonContainer.innerHTML = "";
            showResultText("PUNISHMENT EXECUTED: ALL RECORDS OF YOU IS PURGED BY THE WILL OF THE CITY.");
        }
    };
}

// MEANINGFUL COMMAND SYSTEM
// type `cityCommand('status')` in their browser console (F12) to inspect exact lockouts & chances
window.cityCommand = function(cmd) {
    if (cmd === 'status') {
        const lockout = parseInt(localStorage.getItem("city_lockout")) || 0;
        const now = Date.now();
        if (lockout > now) {
            const timeLeft = lockout - now;
            const h = Math.floor(timeLeft / (1000 * 60 * 60));
            const m = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            console.log(`[CITY STATUS] Locked. Time remaining: ${h}h ${m}m. Chances left: ${remainingChances}`);
        } else {
            console.log(`[CITY STATUS] Active. Prescripts available. Chances left: ${remainingChances}`);
        }
    } else if (cmd === 'reset-all') {
        localStorage.clear();
        location.reload();
    } else {
        console.log("Available commands: cityCommand('status'), cityCommand('reset-all')");
    }
};

function redirect(url, newTab = true) {
    if (newTab) {
        window.open(url, "_blank", "noopener,noreferrer");
    } else {
        window.location.href = url;
    }
}

document.getElementById("meBtn").addEventListener("click", () => {
    redirect("https://www.youtube.com/watch?v=ST5DWHnT_Po");
});

document.getElementById("kofiBtn").addEventListener("click", () => {
    redirect("https://ko-fi.com/kritzkingvoid");
});

document.getElementById("gitBtn").addEventListener("click", () => {
    redirect("https://github.com/DolphinSan/PrescriptsForRealLife");
});

document.getElementById("unitBtn").addEventListener("click", () => {
          showResultText("For now this still random seed, prescript with ai coming soon");
});
