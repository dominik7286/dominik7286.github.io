document.addEventListener("DOMContentLoaded", function () {
    const nextBtn = document.getElementById("next-btn");
    if (nextBtn) {
        nextBtn.addEventListener("click", function () {
            window.location.href = "page1.html"; // Navigálás a második oldalra
        });
    }

    const resultBtn = document.getElementById("result-btn");
    if (resultBtn) {
        resultBtn.addEventListener("click", function () {
            let flipCoin = document.getElementById("flip-coin");
            let randomOutcome = Math.random() < 0.5 ? "headcoin.png" : "tailcoin.png";

            // Megállítja a forgást
            flipCoin.style.animation = "none";
            setTimeout(() => {
                flipCoin.src = randomOutcome;
            }, 500);
        });
    }
});
