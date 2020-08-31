var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
 
var score = 0;

var timerEl = document.getElementById('countdown');
var startBtn = document.getElementById('start');

function countdown() {
    var timeLeft = 75;

    var timeInterval = setInterval(function() {
        timeLeft--;
        timerEl = timeLeft;

        if(timeLeft == 0) {
            clearInterval(timeInterval);
            displayMessage();
        }

    }, 1000);
};

startBtn.onclick = countdown;

// Questions Array
var questions = [
    {question: 'Commonly used date types do NOT include:',
    optionA: 'strings',
    optionB: 'booleans',
    optionC: 'alerts',
    optionD: 'numbers',
    //correct: optionC
},

    {question: 'Arrays can be used to store:',
    optionA: 'numbers and strings',
    optionB: 'other arrays',
    optionC: 'booleans',
    optionD: 'all of the above',
    //correct: 'optionD'
},

    {question: 'The condition in an if/else statement is enclosed with:',
    optionA: 'quotes',
    optionB: 'square brackets',
    optionC: 'curly brackets',
    optionD: 'paranthesis',
    //correct: 'optionC'
},

    {question: 'A very useful tool used during development and debugging and for printing content to the debugger is:',
    optionA: 'Javascript',
    optionB: 'terminal bash',
    optionC: 'for loops',
    optionD: 'console.log',
    //correct: 'optionD'
},

    {question: 'If a string in JavaScript has any content at all, it will be considered:',
    optionA: 'True',
    optionB: 'False',
    //correct: 'optionA'
}
];

var lastQuestion = questions.length - 1;
let runningQuestion = 0;

function questionRenders() {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";

    optionA.innerHTML = q.optionA;
    optionB.innerHTML = q.optionB;
    optionC.innerHTML = q.optionC;
    optionD.innerHTML = q.optionD;

};

for (var i = 0; i < questions.length; i++) {
    var answer = correct(questions[i].question)
    if(answer === correct && questions[i].correct === correct) {
        score++;
        alert('Correct!');
    } else {
        alert('Wrong!');
        timeLeft--;
    }
};

var showResults = function() {
    console.log(score);
};

start.addEventListener("click", startQuiz);

// after hitting submit, show the results
submitButton.addEventListener('click', showResults);

var startQuiz = function() {
    start.style.display = "none";
    renderQuestion();
    renderCounter();
    countdown();
};

startQuiz();