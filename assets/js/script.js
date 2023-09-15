//Dom Elements
const startButtonEl = document.querySelector(".btn");
const titleEl = document.querySelector('.title');
const questionEl = document.querySelector('.question');
const containerAns = document.querySelector('.ans-list');
const timeEl = document.querySelector('#time');
const timeElClass = document.querySelector('.time');


//var for time and indexes

let qIndex = 0;
let timerId;


const quizQuestions = [
    {
        question: "Could you name some built-in methods in JavaScript?",
        answers: ["concat", "font color", "Rich interfaces"],
        correct: "concat",
    },
    {
        question: "Please describe the most important advantage of using JavaScript.",
        answers: ["show images", "Enhanced interactivity", "larger paragraghs",],
        correct: "Enhanced interactivity",
    },
    {
        question: "Please select 1 JavaScript data types.",
        answers: ["height", "font color", "Undefined",],
        correct: "Undefined",
    },
    {
        question: "In how many ways can you create an array in JS",
        answers: ["3", "any", "2"],
        correct: "3",
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: ['javascript', "script", "js",],
        correct: "script",
    },
];


let time = quizQuestions.length * 10;


//////////////////////////////////////
/////TIMER
const timer = () => {
    timerId = setInterval(() => {
        timeEl.textContent = time;
        if (time <= 0) {
            clearInterval(timerId);

        } else {
            --time;
        }
    }, 1000);
};

//////////////////////////////////////
/////START THE QUIZ

const startQuiz = function () {
    startButtonEl.textContent = "Skip";
    timer()
    timeEl.textContent = time;
    generateQuestion()
}

//////////////////////////////////////
/////GENETARE QUESTION
function generateQuestion() {
    containerAns.innerHTML = ""
    if (qIndex < quizQuestions.length) {
        titleEl.textContent = quizQuestions[qIndex].question;
        quizQuestions[qIndex].answers.forEach(que => {
            const html = `<li value='${que}'>${que}</li>`;
            containerAns.insertAdjacentHTML('afterbegin', html);
        })
    } else {
        alert('Game over')
        endGame();
    }
};

//////////////////////////////////////
/////CHECK ANSWER

function checkAns() {
    let btnPressed = event.target;
    if (!btnPressed.value === quizQuestions[qIndex].correct) {
        return;
    }
    if (btnPressed.value === quizQuestions[qIndex].correct) {
        qIndex++;
        if (qIndex < quizQuestions.length) {
            generateQuestion();
        } else {
            time -= 10;
            clearInterval(timerId);
            alert('Game over')
            console.log('Wrong');
        }
    } else {
        console.log('Wrong');
    }
    qIndex++
    generateQuestion()
}

containerAns.addEventListener('click', checkAns);
startButtonEl.addEventListener('click', function () {
    console.log(event.target.textContent);
    if (startButtonEl.textContent === "Start") {
        startQuiz();
    } else if (startButtonEl.textContent === 'Skip') {
        qIndex++;
        generateQuestion()
    }
});

//////////////////////////////////////
///// END GAME

function endGame() {
    clearInterval(timerId);
    timeEl.textContent = "";
    highscore()
}

//////////////////////////////////////
//// HIGH SCORE

function highscore() {
    let highscore;
    highscore = time;
}