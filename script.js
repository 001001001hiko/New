```javascript
/* =========================================
   OUR SECRET UNIVERSE ❤️
   ========================================= */


/* ================= SCREEN CONTROL ================= */

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


/* ================= START ================= */

function enterUniverse() {

    showScreen("question");

}


/* ================= LOVE QUESTION ================= */

function ofCourse() {

    document.getElementById("answer").innerHTML = `
        <p class="pink">
        Then you already know... ❤️
        <br><br>
        But I'll say it anyway:
        I LOVE YOU MORE THAN WORDS CAN EXPLAIN.
        </p>
    `;

    document
        .getElementById("questionContinue")
        .classList.remove("hidden");
}


function tellMe() {

    document.getElementById("answer").innerHTML = `
        <p class="pink">
        More than yesterday...
        <br>
        Less than tomorrow.
        ❤️
        </p>
    `;

    document
        .getElementById("questionContinue")
        .classList.remove("hidden");
}


/* ================= UNIVERSE ================= */

function showUniverse() {

    showScreen("universe");

}


/* ================= MEMORIES ================= */

function memory(number) {

    const box = document.getElementById("memory");

    const memories = {

        1: `
            <h2>⭐ The Beginning</h2>
            <p>
            The first time I saw you,
            I had no idea you would become
            such an important part of my life. ❤️
            </p>
        `,

        2: `
            <h2>😂 Our Laughs</h2>
            <p>
            One of my favorite things about us
            is how even the smallest moments
            can become unforgettable memories.
            </p>
        `,

        3: `
            <h2>💖 The Moment</h2>
            <p>
            Somewhere along the way,
            you stopped being just someone I liked...
            and became someone I truly cared about.
            </p>
        `,

        4: `
            <h2>🌹 My Favorite</h2>
            <p>
            If I had to choose my favorite memory,
            I probably couldn't.
            Because every moment with you
            keeps becoming my new favorite.
            </p>
        `,

        5: `
            <h2>🌌 The Future</h2>
            <p>
            This universe isn't finished.
            I want us to fill it with hundreds
            of new memories together. ❤️
            </p>
        `
    };

    box.innerHTML = memories[number];

}


/* ================= COUNTDOWN ================= */

function showCountdown() {

    showScreen("countdown");

}


/*
   CHANGE THIS DATE TO A SPECIAL DATE.

   Example:
   "2027-01-01T00:00:00"
*/

const specialDate =
    new Date("2027-01-01T00:00:00").getTime();


function updateCountdown() {

    const now = new Date().getTime();

    let distance = specialDate - now;

    if (distance < 0) {

        distance = 0;

    }

    const days =
        Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours =
        Math.floor(
            (distance % (1000 * 60 * 60 * 24))
            / (1000 * 60 * 60)
        );

    const minutes =
        Math.floor(
            (distance % (1000 * 60 * 60))
            / (1000 * 60)
        );

    const seconds =
        Math.floor(
            (distance % (1000 * 60))
            / 1000
        );


    document.getElementById("days").innerText =
        String(days).padStart(2, "0");

    document.getElementById("hours").innerText =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").innerText =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").innerText =
        String(seconds).padStart(2, "0");
}


setInterval(updateCountdown, 1000);

updateCountdown();


/* ================= LETTER ================= */

function showLetter() {

    showScreen("letter");

}


function openLetter() {

    document
        .getElementById("envelope")
        .classList.add("hidden");

    document
        .getElementById("letterText")
        .classList.remove("hidden");

}


/* ================= FINAL ================= */

function finalQuestion() {

    showScreen("final");

}


function yesClicked() {

    document
        .getElementById("finalMessage")
        .classList.remove("hidden");

    createHearts();

    createFireworks();

}


/* ================= SECRET ================= */

function openSecret() {

    document
        .getElementById("secretModal")
        .classList.add("show");

}


function closeSecret() {

    document
        .getElementById("secretModal")
        .classList.remove("show");

}


/* ================= MUSIC ================= */

let musicPlaying = false;


function toggleMusic() {

    const music = document.getElementById("music");

    if (!musicPlaying) {

        music.play()
            .then(() => {

                musicPlaying = true;

                document.getElementById("musicBtn").innerText =
                    "🔊 Music ON";

            })
            .catch(() => {

                alert(
                    "Add a file named music.mp3 to your GitHub repository first."
                );

            });

    } else {

        music.pause();

        musicPlaying = false;

        document.getElementById("musicBtn").innerText =
            "🎵 Music";

    }

}


/* ================= FLOATING HEARTS ================= */

function createHearts() {

    const emojis = [
        "❤️",
        "💕",
        "💖",
        "💗",
        "💓",
        "💞",
        "💘"
    ];

    for (let i = 0; i < 40; i++) {

        const heart =
            document.createElement("div");

        heart.innerText =
            emojis[
                Math.floor(
                    Math.random() * emojis.length
                )
            ];

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.bottom = "-50px";

        heart.style.fontSize =
            20 + Math.random() * 35 + "px";

        heart.style.zIndex = "200";

        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);


        const duration =
            3 + Math.random() * 4;


        heart.animate(

            [
                {
                    transform:
                        "translateY(0) rotate(0deg)",

                    opacity: 1
                },

                {
                    transform:
                        `translateY(-${window.innerHeight + 150}px)
                         rotate(${Math.random() * 720}deg)`,

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


/* ================= FIREWORKS ================= */

function createFireworks() {

    for (let i = 0; i < 60; i++) {

        const particle =
            document.createElement("div");

        particle.innerText = "✨";

        particle.style.position = "fixed";

        particle.style.left = "50%";

        particle.style.top = "45%";

        particle.style.fontSize =
            15 + Math.random() * 25 + "px";

        particle.style.zIndex = "300";

        particle.style.pointerEvents = "none";

        document.body.appendChild(particle);


        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            100 + Math.random() * 400;

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;


        particle.animate(

            [
                {
                    transform:
                        "translate(-50%, -50%) scale(0)",

                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        ) scale(1.5)`,

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


/* ================= CLOSE MODAL BY CLICKING OUTSIDE ================= */

document
    .getElementById("secretModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closeSecret();

        }

    });
```
