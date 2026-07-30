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
const submit = document.getElementById("submit");
const account = document.getElementById("account")
submit.addEventListener("click", (e) => {
    e.preventDefault();
    const header = document.getElementsByTagName("header")
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    const userAge = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const userInfo = {
        fName: firstName,
        lName: lastName,
        age: userAge,
        mail: email,
        pass: password
    }

    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    window.location.href= "account.html"

    loginBtn.style.display = "none";
    account.style.display = "block"

    const isHidden = window.getComputedStyle(loginBox).display === 'block';
    if (isHidden) {
        loginBox.style.display = 'none';
        content.style.display = 'none';
    } else {
        loginBox.style.display = 'block';
        content.style.display = 'flex';
    }
})

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
}



const answerBtn = document.getElementById("submitAnswer");
answerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const criticalThinking = document.getElementById("critical-thinking").textContent;
    const answer = document.getElementById("question-answer").value;
    const pageName = window.location.pathname.split("/").pop().replace(".html", "");
    const existingData = JSON.parse(localStorage.getItem("questData")) || {};

    existingData[pageName] = {
        question: criticalThinking,
        answers: answer
    };

    localStorage.setItem("questData", JSON.stringify(existingData));
    window.location.href = "parents.html";
})
