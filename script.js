```javascript
/* =========================================
   OUR SECRET UNIVERSE ❤️
   ========================================= */


/* ---------- SCREEN CONTROL ---------- */

function showScreen(id) {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ---------- START ---------- */

function enterUniverse() {

    showScreen("loveScreen");
}


/* ---------- LOVE QUESTION ---------- */

function loveAnswer() {

    const text = document.getElementById("loveAnswerText");

    text.innerHTML =
        "Then you already know... but I'll still say it. I LOVE YOU MORE THAN WORDS CAN EXPLAIN. ❤️";

    document.getElementById("continue1").classList.remove("hidden");
}


function tellMe() {

    const text = document.getElementById("loveAnswerText");

    text.innerHTML =
        "More than yesterday... and less than tomorrow. ❤️";

    document.getElementById("continue1").classList.remove("hidden");
}


/* ---------- UNIVERSE ---------- */

function showUniverse() {

    showScreen("universeScreen");
}


/* ---------- MEMORIES ---------- */

function showMemory(number) {

    const box = document.getElementById("memoryBox");

    const memories = {

        1:
            "⭐ The first time I saw you... I didn't know you would become such an important part of my life. ❤️",

        2:
            "😂 One of my favorite things about us is how even the smallest moments can become unforgettable memories.",

        3:
            "💖 Somewhere along the way, I realized that you weren't just someone I liked... you became someone I truly cared about.",

        4:
            "🌹 And this is only the beginning. I want this universe to be filled with hundreds of memories with you."
    };

    box.innerHTML = `<p>${memories[number]}</p>`;
}


/* ---------- LETTER ---------- */

function showLetter() {

    showScreen("letterScreen");
}


function openLetter() {

    document.getElementById("envelope").classList.add("hidden");

    document.getElementById("letter").classList.remove("hidden");
}


/* ---------- FINAL QUESTION ---------- */

function finalQuestion() {

    showScreen("finalScreen");
}


/* ---------- YES BUTTON ---------- */

function yesClicked() {

    document.getElementById("finalMessage").classList.remove("hidden");

    createHearts();

    createFireworks();
}


/* ---------- SECRET BUTTON ---------- */

function secretMessage() {

    document.getElementById("secretModal").classList.add("show");
}


function closeSecret() {

    document.getElementById("secretModal").classList.remove("show");
}


/* ---------- FLOATING HEARTS ---------- */

function createHearts() {

    for (let i = 0; i < 25; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = ["❤️", "💕", "💖", "💗", "💓"][Math.floor(Math.random() * 5)];

        heart.style.position = "fixed";

        heart.style.left = Math.random() * 100 + "%";

        heart.style.bottom = "-50px";

        heart.style.fontSize = (20 + Math.random() * 30) + "px";

        heart.style.zIndex = "200";

        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);

        const duration = 3 + Math.random() * 4;

        heart.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(-${window.innerHeight + 100}px)
                         rotate(${Math.random() * 360}deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duration * 1000,
                easing: "ease-out"
            }
        );

        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }
}


/* ---------- SIMPLE FIREWORKS ---------- */

function createFireworks() {

    for (let i = 0; i < 35; i++) {

        const particle = document.createElement("div");

        particle.innerHTML = "✨";

        particle.style.position = "fixed";

        particle.style.left = "50%";

        particle.style.top = "45%";

        particle.style.fontSize = "25px";

        particle.style.zIndex = "300";

        particle.style.pointerEvents = "none";

        document.body.appendChild(particle);

        const angle = Math.random() * Math.PI * 2;

        const distance = 100 + Math.random() * 300;

        const x = Math.cos(angle) * distance;

        const y = Math.sin(angle) * distance;

        particle.animate(
            [
                {
                    transform: "translate(-50%, -50%) scale(0)",
                    opacity: 1
                },
                {
                    transform:
                        `translate(calc(-50% + ${x}px),
                         calc(-50% + ${y}px)) scale(1.5)`,
                    opacity: 0
                }
            ],
            {
                duration: 1500,
                easing: "ease-out"
            }
        );

        setTimeout(() => {
            particle.remove();
        }, 1500);
    }
}
```
