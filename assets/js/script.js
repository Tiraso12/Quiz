let startButtonEl = document.querySelector("#start-btn");
let questionEl = document.querySelector("#questions");
let scoreEl = document.querySelector("#score");
let timeEl = document.querySelector("#time");
let optionEl = document.querySelector("#options");
let itemA = document.querySelector("#a");
let itemB = document.querySelector("#b");
let itemC = document.querySelector("#c");




let quizQuestions = [
    {
        question: "Could you name some built-in methods in JavaScript?",
        answers: {
            a: "concat",
            b: "font color",
            c: "Rich interfaces",
            correct: "a"
        }
    },
    {
        question: "Please describe the most important advantage of using JavaScript.",
        answers: {
            a: "show images",
            b: "Enhanced interactivity",
            c: "larger paragraghs",
            correct: "b"
        }
    },
    {
        question: "Please select 1 JavaScript data type.",
        answers: {
            a: "height",
            b: "font color",
            c: "Undefined",
            correct: "c"
        }
    },
    {
        question: "In how many ways can you create an array in JS",
        answers: {
            a: "3",
            b: "any",
            c: "2",
            correct: "3"
        }
    },
    {
        question: "Inside which HTML element do we put the javascript document?",
        answers: {
            a: "<javascript>",
            b: "<script>",
            c: "<js>",
            correct: "b"
        }
    }
];

// start game set timer and score
// generate question
// generate option buttons
// loop through options.

//start button
let currentQuestion = 0
function startGame() {
    let score = 0;
    let timer = 0;
    setNextQuest(currentQuestion);

}

function setNextQuest(queIndex) {
    const questionData = quizQuestions[queIndex];
    questionEl.textContent = questionData.question
    currentQuestion++;
    let [a, b, c] = Object.values(questionData.answers)
    itemA.textContent = 'a) ' + a
    itemB.textContent = 'b) ' + b
    itemC.textContent = 'c) ' + c
}

function checkAnswer() {
}

startButtonEl.addEventListener("click", () =>
    startButtonEl.textContent === 'Start' ? startGame(currentQuestion) : setNextQuest(currentQuestion)
);
