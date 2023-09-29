//Dom Elements
// const submitBtn = document.querySelector('#submit')
const startButtonEl = document.querySelector(".btn");
const titleEl = document.querySelector('.title');
const questionEl = document.querySelector('.question');
const ansEl = document.querySelector('.ans-list');
const timeEl = document.querySelector('#time');
const timeElClass = document.querySelector('.time');
const formEl = document.querySelector('.form');
const container = document.querySelector('.container');



//var for time and indexes

let qIndex = 0;
let timerId;
let score;



const quizObject = [
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



let time = quizObject.length * 12;

//////////////////////////////////////
/////TIMER
const startTimer = () => {
    const tick = () => {
        timeEl.textContent = time
        if (time <= 0 || qIndex >= quizObject.length) {
            clearInterval(timer)
        }
        time--
    };
    tick();
    const timer = setInterval(tick, 1000);
};

//////////////////////////////////////
/////GENERATE QUESTION

const genQuestion = function () {
    if (qIndex < quizObject.length) {
        const { question: title, answers: options, correct } = quizObject[qIndex]
        return displayQuiz(title, options, correct)
    }
    endGame()
}

//////////////////////////////////////
/////DISPLAY QUESTION AND OPTIONS
const displayQuiz = function (question, options) {
    titleEl.innerHTML = ""
    ansEl.innerHTML = ""
    titleEl.textContent = question;
    const answerEl = options.map(ans => `<li '>${ans}</li>`).join('');
    ansEl.insertAdjacentHTML('afterbegin', answerEl)
}



//////////////////////////////////////
/////CHECK ANSWER

const checkAns = function (e) {
    const selectedAnswer = e.target.textContent;
    const correctAnswer = quizObject[qIndex].correct;
    if (time <= 0) endGame();
    if (selectedAnswer !== correctAnswer) {
        console.log('wrong!');
        time -= 10;
        qIndex++
        genQuestion(quizObject, qIndex)
    }
    if (selectedAnswer === correctAnswer) {
        // if (qIndex >= quizObject.length) {
        //     endGame();
        // }
        console.log('right');
        qIndex++
        genQuestion(quizObject, qIndex);
    }
}


//////////////////////////////////////
///// END GAME

function endGame() {
    score = time;
    alert('gameover')
    highscore()
}

//////////////////////////////////////
//// HIGH SCORE



function highscore() {
    container.innerHTML = ''
    console.log(score);
    if (score <= 0) {
        score = 0
    }
    const html = `
        <div class="highscore">
            <h2 class="header"> Game has Ended!</h2>
            <p class ="p">Your Score: <span id="score">${score}</span></p>
            <form class="form">
                 <label for="">Enter your initials</label>
                <input type="text" id="initials" max="3" />
            </form>
        <button id="submit" class="btn">Submit</button>
        </div>      
        ` ;

    container.insertAdjacentHTML('afterbegin', html);

}


///////////////////
// Save highscore
function saveHighscore() {

    const formInput = document.querySelector('#initials').value;
    const lowercaseInput = formInput.toLowerCase();

    try {
        localStorage.setItem(lowercaseInput, score);
        console.log('Item successfully saved to localStorage.');
    } catch (error) {
        console.error('Error while saving to localStorage:', error);
    }


}

// }
/////////////////////
//Event Listeners
ansEl.addEventListener('click', checkAns);
startButtonEl.addEventListener('click', function () {
    if (startButtonEl.textContent === "Start") {
        startTimer(time);
        genQuestion()
        startButtonEl.textContent = "Skip";
    }
});


container.addEventListener('click', function (e) {
    if (e.target.textContent === 'Submit') {
        saveHighscore()
    }
})