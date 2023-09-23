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



let time = quizQuestions.length * 1;

//////////////////////////////////////
/////TIMER
const startTimer = () => {
    const tick = () => {
        if (time === 0) {
            clearInterval(timer);
            endGame()
        } else {
            time--;
        }
        timeEl.textContent = time;
    }
    tick();
    const timer = setInterval(tick, 1000);

};

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
    if (btnPressed.value !== quizQuestions[qIndex].correct) {
        time -= 10;
        qIndex++
        generateQuestion()
        return;
    }
    if (btnPressed.value === quizQuestions[qIndex].correct) {
        qIndex++;
        if (qIndex < quizQuestions.length) {
            generateQuestion();
        } else {
            endGame();
        }
    }
}


//////////////////////////////////////
///// END GAME

function endGame() {
    clearInterval(timerId);
    highscore()
}

//////////////////////////////////////
//// HIGH SCORE

function highscore() {
    const container = document.querySelector('.container');
    container.innerHTML = ''
    let highscore;
    highscore = time;
    const html = `
    <div class="highscore">
    <h2 class="header"> Game has Ended!</h2>
    <p class ="p">Your Score: <span id="score">${highscore}</span></p>
    <form class="form">
    <label for="">Enter your initials</label>
    <input type="text" id="initials" max="3" />
    </form>
    <button id="submit" class="btn">Submit</button>
    </div>
    `
    container.insertAdjacentHTML('afterbegin', html);
}

/////////////////////
//Event Listeners
containerAns.addEventListener('click', checkAns);
startButtonEl.addEventListener('click', function () {
    console.log(event.target.textContent);
    if (startButtonEl.textContent === "Start") {
        startButtonEl.textContent = "Skip";
        startTimer();
        generateQuestion()
    } else if (startButtonEl.textContent === 'Skip') {
        qIndex++;
        generateQuestion()
    }

});