var startButton = document.getElementById("start-btn")
var startQuiz = document.getElementById("start")
var question = document.getElementById("quizquestion")
var highscore = document.getElementById("highscores")
var timeEl = document.getElementById("time")
var gntQ = document.getElementById("q-text")
var answerBtn = document.getElementById("answers")
var timerId;
var qIndex = 0;

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
var time = quizQuestions.length * 15;
console.log(quizQuestions.length);
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
    //var representing the object
    var pregunta = quizQuestions[qIndex];
    // question
    gntQ.textContent = pregunta.question;
    answerBtn.innerHTML = '';
   
    for (let i = 0; i < pregunta.answers.length; i++) {
        const answer = pregunta.answers[i];
        var qButton = document.createElement("button");
        qButton.setAttribute("class", "answer");
        qButton.setAttribute("value", answer);
        qButton.textContent = i + 1 + '. ' + answer;
        answerBtn.appendChild(qButton);
}
}






function selectAnswer(event) {
    var button2 = event.target;
    if (!button2.matches(".answer")){
        return 
    }
    if (!button2.matches()) {
        
    }

    console.log(button2);
    

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