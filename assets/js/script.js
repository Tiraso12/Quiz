//Dom Elements
var startButton = document.getElementById("start-btn")
var startQuiz = document.getElementById("start")
var question = document.getElementById("quizquestion")
var highscore = document.getElementById("highscores")
var timeEl = document.getElementById("time")
var gntQ = document.getElementById("q-text")
var answerBtn = document.getElementById("answers")
var rightOrWrong = document.getElementById("right-wrong")
var submitEl = document.getElementById("submit")


//var for time and indexes

var timerId;
var qIndex = 0;


var quizQuestions = [
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
        answers: ["<javascript>", "<script>", "<js>",],
        correct: "<script>",
    },
];


var time = quizQuestions.length * 12;




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
        qButton.onclick = selectAnswer;
        answerBtn.appendChild(qButton);

    };
};

function selectAnswer(event) {
    var btnPress = event.target;
    if (!btnPress.matches(".answer")) {
        return;
    }
    if (btnPress.value === quizQuestions[qIndex].correct) {
        rightOrWrong.textContent = "RIGHT!"
    } else {
        rightOrWrong.textContent = "WRONG!"
        time -= 10;
        timeEl.textContent = time;
    }

    if (time < 0) {
        endGame();
    }
    // if (the current question index equals the length of your questions) then end your quiz, otherwise, move onto the next question.

    qIndex++;
    if (qIndex === quizQuestions.length || time <= 0) {
        endGame();
    } else {
        setNextQuest();
    }
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

    //display score
    highscore.removeAttribute('class');

    var score = document.getElementById("score");
    score.textContent = time;

    //hide questions div
    question.classList.add("hide");

}

function saveHighScore() {
    //capture the value and trim the input.
    var initialEl = document.querySelector("#initials");
    var initials = initialEl.value.trim();
    //clear the input when button is click.
    if (initials !== '') {
        var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
        var data = {
            score: time,
            initials: initials,
        };
        highscores.push(data);

        localStorage.setItem("highscore", highscores);
    };

    displayHighscore();

}

function displayHighscore() {

};


submitEl.addEventListener("click", saveHighScore);
startButton.addEventListener("click", startGame);



//function 1 hide div

//function 2 create question

//function logic

// function end game (end game, stop timer, condition " less than 0 force it to 0 define score as object")