const loginBtn = document.getElementById("login-btn")
const loginBox = document.getElementById("loginBox")
const content = document.getElementById("main")
loginBtn.addEventListener('click', () => {
    const isHidden = window.getComputedStyle(loginBox).display === 'none';
    if (isHidden) {
        loginBox.style.display = 'block';
        content.style.display = 'flex';
    } else {
        loginBox.style.display = 'none';
        content.style.display = 'none';
    }
});


const smallFontBtn = document.getElementById("smallFont");
const defFontBtn = document.getElementById("defaultFont");
const largeFontBtn = document.getElementById("largeFont");
const kingH2 = document.getElementById("kingName");
const KingH3 = document.getElementById("kingDescribe");
const storyP = document.getElementsByClassName("storyText");

smallFontBtn.addEventListener("click", () => {
    kingH2.style.fontSize = "22px";
    KingH3.style.fontSize = "16px";
    for (let p of storyP) {
        p.style.fontSize = "14px";
    }
});

defFontBtn.addEventListener("click", () => {
    kingH2.style.fontSize = "24px";
    KingH3.style.fontSize = "18.72px";
    for (let p of storyP) {
        p.style.fontSize = "16px";
    }
});

largeFontBtn.addEventListener("click", () => {
    kingH2.style.fontSize = "26px";
    KingH3.style.fontSize = "20px";
    for (let p of storyP) {
        p.style.fontSize = "18px";
    }
});

const readAloudBtn = document.getElementById("readAloud")
const storyAudio = document.getElementById("storySound")

readAloudBtn.addEventListener("click", () => {
    storyAudio.play();
});

const theRightAnswer = document.getElementById("right-answer");
const theOtherAnswers = document.getElementsByClassName("answers");
const theState = document.getElementById("status");

theRightAnswer.addEventListener("click", () => {
    theRightAnswer.style.border = "2px solid #006400";
    theState.textContent = "Good work! Ay is so proud of you! You've got 10 points."
    theState.style.color = "#006400"
});

for (let answer of theOtherAnswers) {
    answer.addEventListener("click", () => {
        answer.style.border = "2px solid #8e0000";
        theState.textContent = "No, little adventurer, try again! Don't miss out on the 10 points."
        theState.style.color = "#8e0000"
    });

}

const stars = document.querySelectorAll(".star");
const result = document.getElementById("result"); 

let currentRating = 0;

const labels = {
    1: "Very bad",
    2: "Bad",
    3: "Nice",
    4: "Good",
    5: "Excellent",
};

function highlightStars(rating) {
    stars.forEach(star => {
        const value = Number(star.dataset.value);
        star.classList.toggle("active", value <= rating);
    });
}

stars.forEach(star => {
    star.addEventListener("mouseenter", () => {
        const value = Number(star.dataset.value);
        highlightStars(value);
    });

    star.addEventListener("mouseleave", () => {
        highlightStars(currentRating);
    });

    star.addEventListener("click", () => {
        currentRating = Number(star.dataset.value);
        highlightStars(currentRating);
        result.textContent = `${currentRating} stars - ${labels[currentRating]}`;
    });
});


const storyProgress = document.getElementById("main-p");
const storyLabel = document.getElementById("main-l");
let maxPercent = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const currentPercent = Math.round((scrollTop / docHeight) * 100);

    if (currentPercent > maxPercent) {
        maxPercent = currentPercent;
        setProgress(maxPercent);
    }
});

function setProgress(percent) {
    document.getElementById('fill').style.width = percent + '%';
    document.getElementById('percentLabel').textContent = percent + '%';
    storyProgress.style.width = `${percent} + %`;
    storyLabel.textContent = `${percent} %`;
}