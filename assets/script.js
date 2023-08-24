//global variables
var questionIndex = 0;
var timer = 60;

//objects for questions
var questions = [
    {
      question: "Question 1",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      answer: "option 1"
    },
    {
      question: "Question 2",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      answer: 1
    },
  ];


  //event listeners


  //DOM
var startScreen = document.getElementById('start-screen');
var startButton = document.getElementById('start-btn');
var quizSection = document.getElementById('quiz');
var questionElement = document.getElementById('question');
var optionsElement = document.getElementById('options');
var timerElement = document.getElementById('timer');
var endGameSection = document.getElementById('end-game');
var finalScoreElement = document.getElementById('final-score');
var initialsInput = document.getElementById('initials');
var submitButton = document.getElementById('submit-btn');

var currentIndex = 0;

  //quiz start function
var questionTag = document.createElement("h1");
questionTag.textContent = questions[currentIndex].question
questionElement.appendChild(questionTag);

for(let i=0; i < questions[currentIndex].options.length; i++){
    var button = document.createElement("button");
    button.setAttribute("class", "options-btn")
    button.innerHTML = questions[0].options[i];
    button.onclick = displayOptions;
    optionsElement.appendChild(button);
}

// Initially, hide the quiz and end-game sections
quizSection.style.display = 'none';
endGameSection.style.display = 'none';

function displayOptions(event){
  var element = event.target.innerHTML;
  console.log(element);

}

  //check correct


  //timer
  function startTimer() {
    var interval = setInterval(function () {
      timerElement.textContent = 'Time: ' + timer;
      timer--;
  
      // Stop the timer when it reaches 0
      if (timer < 0) {
        clearInterval(interval);
        endGame();
      }
    }, 1000);
  }
  

  //end game


  //high score