AOS.init();

function showLove() {
    document.getElementById("message").innerText =
        "Swetha 💕 I Love You More Than Words Can Say! Forever Meow & Eli 🐱🐭";

    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
}

function toggleMusic() {
    const music = document.getElementById("bgMusic");
    const button = document.querySelector(".music-control button");

    if (music.paused) {
        music.play();
        button.innerText = "⏸ Pause Our Song";
    } else {
        music.pause();
        button.innerText = "🎵 Play Our Song";
    }
}

// Floating hearts generator
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💗";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
    heart.style.fontSize = (Math.random() * 20 + 15) + "px";

    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 500);

function updateLoveTimer() {
    const startDate = new Date("January 30, 2024 12:30:00").getTime();
    const now = new Date().getTime();

    const difference = now - startDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    document.getElementById("loveTimer").innerHTML =
        days + " Days 💖 " +
        hours + " Hours 💕 " +
        minutes + " Minutes 💗 " +
        seconds + " Seconds";
}

setInterval(updateLoveTimer, 1000);
updateLoveTimer();

document.addEventListener("DOMContentLoaded", function () {

    const text = `Mrs.Swetha Venu Raghavan 💕,

From the moment you walked into my life,
everything became softer, warmer, and brighter.

You are not just my love,
you are my comfort, my peace, my home,my baby,my wifey.

With you, even tough things feels beautiful❣️, even hard heartbreaks
gives beautifull butterflies🦋. I need you to hold my hands🤝 ,
have your nest juz like how you conquired it for the first time🫂 
without asking any permissions🥰! To my baby i'll be and understanding 
partner who never leaves her juz like any other person in her life😘.
I promise to marry her and live a happy,smooth,healthy life with our 
cute kutty pandas🐼🐼 with gods good blessings💞! I wish all our 11.11 prayers 
comes true❤️. Love you ammuh😍. uuummmmmwah💋. 
Forever meow 🐱 & eli 🐭 💗`;

    let index = 0;
    const speed = 40;

    function typeWriter() {
        if (index < text.length) {
            document.getElementById("typewriter").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();

});


const correctPassword = "3001"; // CHANGE THIS

function askPassword() {
    const userInput = prompt("Enter our 4-digit secret code 💕");

    if (userInput === correctPassword) {
        document.getElementById("secretPopup").style.display = "flex";

        confetti({
            particleCount: 250,
            spread: 100,
            origin: { y: 0.6 }
        });
    } else {
        alert("Wrong password kutty papa 😜 Try again!");
    }
}

function closeSecret() {
    document.getElementById("secretPopup").style.display = "none";
}
