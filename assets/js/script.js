var startButton = document.getElementById("start-btn")
startButton.addEventListener("click", startGame)
var prueba = document.querySelector("#questions")
var quizQuestions = [
    {
        question: "Could you name some built-in methods in JavaScript?",
        answers: {
            a:"concat",
            b:"font color",
            c:"Rich interfaces",
        }
    },
    {
        question: "Please describe the most important advantage of using JavaScript.",
        answers: {
            a:"show images",
            b:"Enhanced interactivity",
            c:"larger paragraghs",
        }
    },
    {
        question: "Please select 1 JavaScript data types.",
        answers: {
            a:"height",
            b:"font color",
            c:"Undefined",
        }
    },
    {
        question: "In how many ways can you create an array in JS",
        answers: {
            a:"3",
            b:"any",
            c:"2",
        }
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: {
            a:"<javascript>",
            b:"<script",
            c:"<js>",
        }
    }
];



//start button
function startGame(){
prueba.textContent = "PRIMERA PREGUNTA"
}
//show questions

function setNextQuest(){

}

function selectAnswer(){


}


