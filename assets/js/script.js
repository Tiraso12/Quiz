//Dom Elements
var startButton = document.getElementById("start-btn")
var startQuiz = document.getElementById("start")
var question = document.getElementById("quizquestion")
var highscore = document.getElementById("highscores")
var timeEl = document.getElementById("time")
var gntQ = document.getElementById("q-text")
var answerBtn = document.getElementById("answers")

//var for time and indexes

var timerId;
var qIndex = 0;

var quizQuestions = [
    {
        question: "Could you name some built-in methods in JavaScript?",
        answers: [ "concat","font color","Rich interfaces" ],
        correct: "concat",
    },
    {
        question: "Please describe the most important advantage of using JavaScript.",
        answers: [ "show images","Enhanced interactivity", "larger paragraghs", ],
        correct: "Enhanced interactivity",
    },
    {
        question: "Please select 1 JavaScript data types.",
        answers: [ "height","font color","Undefined",],
        correct: "Undefined",
    },
    {
        question: "In how many ways can you create an array in JS",
        answers: ["3","any","2"],
        correct: "3",
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: ["<javascript>", "<script>", "<js>",],
        correct: "<script>",
    },
];


var time = quizQuestions.length * 2;



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
        qButton.onclick = selectAnswer
        answerBtn.appendChild(qButton);     
       
};
};

function selectAnswer(event) {
    var btnPress = event.target;
    if(this.value === quizQuestions[qIndex].correct){
        console.log("corret!");
    }else{
        time -= 10;
        console.log("Incorrect!");
    }

    if (time < 0) {
        endGame();
    }
    
    qIndex++;
    setNextQuest();
  
}
function timer() {
    time--;
    timeEl.textContent = time;

    if (time <= 0) {

        endGame();
    }

}

function endGame() {
    clearInterval(timerId);
    //hide questions div
    question.classList.add("hide");

    //display score
    highscore.removeAttribute('class');
    highscore.textContent = "Score " + time;
    var btnScore = document.createElement("button");
    btnScore.setAttribute("class", "score");
    btnScore.setAttribute("id","submit");
    btnScore.textContent = "Submit";
    highscore.appendChild(btnScore);
    

}
startButton.addEventListener("click", startGame,)



//function 1 hide div

//function 2 create question

//function logic

// function end game (end game, stop timer, condition " less than 0 force it to 0 define score as object")