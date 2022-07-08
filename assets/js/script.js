var startButton = document.getElementById("start-btn")
var startQuiz = document.getElementById("start")
var question = document.getElementById("quizquestion")
var hscores = document.getElementById("highscores")
var timeEl = document.getElementById("time")
var gntQ = document.getElementById("q-text")
var answerBtn = document.getElementById("answers")
//var time = quizQuestions.length * 15;
var timerId;


var quizQuestions = [
    {
        question: "Could you name some built-in methods in JavaScript?",
        answers: [
            "concat",
            "font color",
            "Rich interfaces"
        ],
        correct: "concat",
    },
    {
        question: "Please describe the most important advantage of using JavaScript.",
        answers: [
            "show images",
            "Enhanced interactivity",
            "larger paragraghs",
        ],
        correct: "concat",
    },
    {
        question: "Please select 1 JavaScript data types.",
        answers: [
            "height",
            "font color",
            "Undefined",
        ],
        correct: "concat",
    },
    {
        question: "In how many ways can you create an array in JS",
        answers: [
            "3",
            "any",
            "2",
        ],
        correct: "concat",
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            "<javascript>",
            "<script>",
            "<js>",
        ],
        correct: "concat",
    },
];
console.log(quizQuestions.length);
// start game set timer and score
// generate question
// generate option buttons
// loop through options.


//start button
function startGame() {

    startQuiz.setAttribute("class", 'hide');
    question.removeAttribute("class");
    timerId = setInterval(timer, 1000);
    timeEl.textContent = time;
    setNextQuest();


}

//
function setNextQuest() {
    var pregunta = startQuiz;
    pregunta.textContent = quizQuestions;
    startButton.style.display = "none";
    question.setAttribute("class", "block");
    gntQ.textContent = "select question from array";
    selectAnswer();

}
//
function selectAnswer() {
    console.log("test")

}

function timer() {
    time--;
    timeEl.textContent = time;

    if (time <= 0) {

        endGame();
    }

}

function endGame() {

}
startButton.addEventListener("click", startGame,)


//function 1 hide div

//function 2 create question

//function logic

// function end game (end game, stop timer, condition " less than 0 force it to 0 define score as object")