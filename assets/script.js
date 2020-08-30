const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
 
var score = 0;

var timerEl = document.getElementById('countdown');

function countdown() {
    var timeLeft = 75;

    var timeInterval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = timeLeft;

        if(timeLeft == 0) {
            clearInterval(timeInterval);
            displayMessage();
        }

    }, 1000);
};

var showResults = function() {

};

// after hitting submit, show the results
submitButton.addEventListener('click', showResults);

// Questions Array
var questions = [
    {question: 'Commonly used date types do NOT include:',
    1: 'strings',
    2: 'booleans',
    3: 'alerts',
    4: 'numbers',
    correct: 3},

    {question: 'Arrays can be used to store:',
    1: 'numbers and strings',
    2: 'other arrays',
    3: 'booleans',
    4: 'all of the above',
    correct: 4},

    {question: 'The condition in an if/else statement is enclosed with:',
    1: 'quotes',
    2: 'square brackets',
    3: 'curly brackets',
    4: 'paranthesis',
    correct: 3},

    {question: 'A very useful tool used during development and debugging and for printing content to the debugger is:',
    1: 'Javascript',
    2: 'terminal bash',
    3: 'for loops',
    4: 'console.log',
    correct: 4},

    {question: 'If a string in JavaScript has any content at all, it will be considered:',
    1: 'True',
    2: 'False',
    correct: 1}
];

for (var i = 0; i < questions.length; i++) {
    var answer = correct(questions[i].question)
    if(answer === correct && questions[i].correct === correct) {
        score++;
        alert('Correct!');
    } else {
        alert('Wrong!');
    }
}

