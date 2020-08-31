
var resultsContainer = document.getElementById('results');
 
var score = 0;

var timerEl = document.getElementById('countdown');
var startBtn = document.getElementById('start');

//button variables
var button1 = `<label>
            <button id="button1">
                
            </label>`
var button2 = `<label>
            <button name="question1" value="A" id="button2">
                
            </label>`
var button3 = `<label>
            <button name="question1" value="A" id="button3">
                
            </label>`
var button4 = `<label>
            <button name="question1" value="A" id="button4">
                
            </label>`


var currentQuestion = 0;

// Questions Array
var questions = [
{   question: 'Commonly used date types do NOT include:',
    answers: {
    optionA: 'strings',
    optionB: 'booleans',
    optionC: 'alerts',
    optionD: 'numbers',
    },
    correct: 'C'
},

{   question: 'Arrays can be used to store:',
    answers: {
    optionA: 'numbers and strings',
    optionB: 'other arrays',
    optionC: 'booleans',
    optionD: 'all of the above',
    },
    correct: 'D'
},

{   question: 'The condition in an if/else statement is enclosed with:',
    answers: {
    optionA: 'quotes',
    optionB: 'square brackets',
    optionC: 'curly brackets',
    optionD: 'paranthesis',
    },
    correct: 'C'
},

{   question: 'A very useful tool used during development and debugging and for printing content to the debugger is:',
    answers: {
    optionA: 'Javascript',
    optionB: 'terminal bash',
    optionC: 'for loops',
    optionD: 'console.log',
    },
    correct: 'D'
},

{   question: 'If a string in JavaScript has any content at all, it will be considered:',
    answers: {
    optionA: 'True',
    optionB: 'False',
    },
    correct: 'A'
}
];

//Timer function
/* function countdown() {
    var timeLeft = 75;

    var timeInterval = setInterval(function() {
        timeLeft--;
        timerEl = timeLeft;

        if(timeLeft == 0) {
            clearInterval(timeInterval);
            displayMessage();
        }

    }, 1000);
}; */

var quiz = function() {
    
};

function nextQuestion(evt) {


    button1 = `<label>
                <button id="button1">
                    ${evt.currentTarget.myParam} : 
                    ${questions[currentQuestion].answers.optionA}
                </label>`
    button2 = `<label>
                <button name="question1" value="A" id="button2">
                    2 : 
                    ${questions[currentQuestion].answers.optionB}
                </label>`
    button3 = `<label>
                <button name="question1" value="A" id="button3">
                    3 : 
                    ${questions[currentQuestion].answers.optionC}
                </label>`
    button4 = `<label>
                <button name="question1" value="A" id="button4">
                    4: 
                    ${questions[currentQuestion].answers.optionD}
                </label>`



    currentQuestion++;

    quizContainer.innerHTML = button1 + button2 + button3 + button4;
}


function checkAnswer(){
    // use getElementsByName because we have an array which it will loop through
    choices = document.getElementsByName("choices");
    for(var i=0; i<choices.length; i++){
      if(choices[i].checked){
        choice = choices[i].value;
      }
    }
    // check if answer matches the correct choice
    if(choice == questions[pos].answer){
      correct++;
    }
    
    pos++;
    renderQuestion();
};

function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  const quizContainer = document.getElementById('quiz');

  quizContainer.innerHTML = button1 + button2 + button3 + button4;

  
  const submitButton = document.getElementById('submit');
  submitButton.addEventListener("click", nextQuestion);
  submitButton.myParam = "test";

  const tbutton1 = document.getElementById('button1');
  tbutton1.body.addEventListener("click", function(e){
    if(e.srcElement.id == 'button1'){
          console.log("hello");
     }
    });

  const tbutton2 = document.getElementById('button2');
  tbutton2.addEventListener("click", function(e){
    if(e.target && e.target.id== 'button2'){
          nextQuestion;
     }
    });

  const tbutton3 = document.getElementById('button3');
  tbutton3.addEventListener("click", function(e){
    if(e.target && e.target.id== 'button3'){
        nextQuestion;
     }
    });

  const tbutton4 = document.getElementById('button4');
  tbutton4.addEventListener("click", function(e){
    if(e.target && e.target.id== 'button4'){
        nextQuestion;
     }
    });

 
quiz();