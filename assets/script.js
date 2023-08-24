// Global variables
var currentIndex = 0;
var timer = 60;
var score = 0;
var interval;

// DOM elements
var startScreen = document.getElementById('start-screen');
var startButton = document.getElementById('start-btn');
var quizSection = document.getElementById('quiz');
var questionElement = document.getElementById('question');
var optionsElement = document.getElementById('options');
var timerElement = document.getElementById('timer');
var endGameSection = document.getElementById('end-game');
var finalScoreElement = document.getElementById('final-score');

// Questions data
var questions = [
  {
    question: "What is the scientific name for domestic cats?",
    options: ["Felis catus", "Panthera leo", "Canis lupus", "Ursus arctos"],
    answer: "Felis catus"
  },
  {
    question: "How many toes do most cats have on each front paw?",
    options: ["Four", "Five", "Six", "Seven"],
    answer: "Five"
  },
  {
    question: "What is a group of cats called?",
    options: ["A clowder", "A herd", "A pride", "A flock"],
    answer: "A clowder"
  },
  {
    question: "Which sense in cats is highly developed, allowing them to detect scents over long distances?",
    options: ["Taste", "Touch", "Sight", "Smell"],
    answer: "Smell"
  },
  {
    question: "What is a cat's primary form of communication?",
    options: ["Barking", "Growling", "Meowing", "Squeaking"],
    answer: "Meowing"
  }
];
// Event listener for start button
startButton.addEventListener('click', function () {
  // Hide the start-screen section
  startScreen.style.display = 'none';
  // Display questions and options
  displayQuestionAndOptions();
  // Start timer
  startTimer();
});

// Function to display questions and options
function displayQuestionAndOptions() {
  // Show the quiz section
  quizSection.style.display = 'block';
  // Hide the end-game section
  endGameSection.style.display = 'none';

  // Display the question
  questionElement.textContent = questions[currentIndex].question;

  // Clear previous options
  optionsElement.innerHTML = '';

  // Loop through options and create buttons
  for (let i = 0; i < questions[currentIndex].options.length; i++) {
    var button = document.createElement('button');
    button.setAttribute('class', 'options-btn');
    button.textContent = questions[currentIndex].options[i];
    button.onclick = displayOptions;
    optionsElement.appendChild(button);
  }
}

// Display options
function displayOptions(event) {
  var selectedOption = event.target.textContent;
  // Check if selectedOption matches the correct answer
  if (selectedOption === questions[currentIndex].answer) {
    score++;
  }
  currentIndex++;
  if (currentIndex < questions.length) {
    displayQuestionAndOptions();
  } else {
    endGame();
  }
}

// Function to start the timer
function startTimer() {
  interval = setInterval(function () {
    timerElement.textContent = 'Time: ' + timer;
    timer--;

    // Stop the timer when it reaches 0
    if (timer < 0) {
      clearInterval(interval);
      endGame();
    }
  }, 1000);
}

// Initially, hide the end-game section
endGameSection.style.display = 'none';

// Function to handle end of game
function endGame() {
  clearInterval(interval);
  // Hide the quiz section
  quizSection.style.display = 'none';
  // Display the end-game section
  endGameSection.style.display = 'block';
  // Display final score
  finalScoreElement.textContent = 'Your final score is: ' + score;
}
