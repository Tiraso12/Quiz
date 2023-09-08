var startButtonEl = document.querySelector("#start-btn");
var questionEl = document.querySelector("#questions");
var scoreEl = document.querySelector("score");
var timeEl = document.querySelector("time");

var quizQuestions = [
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
        question: "Inside which HTML element do we put the JavaScript?",
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
    var score = 0;
    var timer = 0;
    setNextQuest(currentQuestion);

}

function setNextQuest(queIndex) {
    const questionData = quizQuestions[queIndex];
    questionEl.textContent = questionData.question
    currentQuestion++;
    queIndex++;
    console.log(queIndex);
    startButtonEl.textContent = 'Next';

}

function selectAnswer() {


}

startButtonEl.addEventListener("click", function () {
    if (startButtonEl.textContent === 'Start') {
        startGame(currentQuestion)
    } else { setNextQuest(currentQuestion) }
});
