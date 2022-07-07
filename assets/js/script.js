var startButton = document.querySelector("#start-btn")
var prueba = document.querySelector("#questions")

var quizQuestions = [
    {
        question1: "Could you name some built-in methods in JavaScript?",
        answers: {
            a:"concat",
            b:"font color",
            c:"Rich interfaces",
            correct: "a"
        }
    },
    {
        question2: "Please describe the most important advantage of using JavaScript.",
        answers: {
            a:"show images",
            b:"Enhanced interactivity",
            c:"larger paragraghs",
            correct: "b"
        }
    },
    {
        question3: "Please select 1 JavaScript data types.",
        answers: {
            a:"height",
            b:"font color",
            c:"Undefined",
            correct: "c"
        }
    },
    {
        question4: "In how many ways can you create an array in JS",
        answers: {
            a:"3",
            b:"any",
            c:"2",
            correct: "3"
        }
    },
    {
        question5: "Inside which HTML element do we put the JavaScript?",
        answers: {
            a:"<javascript>",
            b:"<script>",
            c:"<js>",
            correct: "b"
        }
    }
];

// start game set timer and score
// generate question
// generate option buttons
// loop through options.


//start button
function startGame(){
var score = 0;
var timer = 0;
setNextQuest();

}


function setNextQuest(){
    var pregunta = prueba;
    pregunta.textContent = quizQuestions

    console.log(prueba);

}

function selectAnswer(){


}
startButton.addEventListener("click", startGame,)
