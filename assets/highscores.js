// Get the back button element on the high scores page
var backToQuizButton = document.getElementById('back-to-quiz');

// Event listener for the back button
backToQuizButton.addEventListener('click', function () {
  // Redirect the user back to the quiz page
  window.location.href = 'index.html';
});

// Get the high scores from local storage
var highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// Get the element where you want to display the high scores list
var highScoresList = document.getElementById('high-scores-list');

// Loop through the high scores and create list items to display them
for (var i = 0; i < highScores.length; i++) {
  var highScore = highScores[i];
  var listItem = document.createElement('li');
  listItem.textContent = highScore.initials + ': ' + highScore.score;
  highScoresList.appendChild(listItem);
}
