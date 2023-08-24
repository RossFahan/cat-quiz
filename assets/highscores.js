// Get the back button element on the high scores page
var backToQuizButton = document.getElementById('back-to-quiz');

// Event listener for the back button
backToQuizButton.addEventListener('click', function () {
  // Redirect the user back to the quiz page
  window.location.href = 'index.html';
});
