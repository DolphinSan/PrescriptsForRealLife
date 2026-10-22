function handlePlayClick() {
    // Check 24-hour lockout restriction
    const lockoutUntil = parseInt(localStorage.getItem("city_lockout")) || 0;
    const now = Date.now();

    if (now < lockoutUntil) {
        const timeLeft = lockoutUntil - now;
        const hours = Math.floor(timeLeft / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        showResultText(`LOCKED: WAIT ${hours}H ${minutes}M ${seconds}S FOR THE NEXT PRESCRIPT.`);
        return;
    }

    clickCount++;

    const picked = pickMessage();
    if (!picked) return;

    showResultButtons();

    scrambleReveal(
        picked.text,
        scrambleDuration,
        revealDuration,
        t => display.textContent = t
    );
}

startBtn.addEventListener("click", handlePlayClick);

document.addEventListener("DOMContentLoaded", () => {
    const messages = [
        "Uhm.. Hello, are you ready for the trial? ~Sora",
        "Welcome back to the City ~ R13n",
        "Challenge mode engaged. Choose wisely. ~ Moirai",
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];
    updateCounters();
    showResultTextIntro(randomMessage);
});
