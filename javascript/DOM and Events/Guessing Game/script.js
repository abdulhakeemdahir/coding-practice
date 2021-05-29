'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = (document.querySelector('.highscore').textContent = 0);
let score = 20;
let resetGame = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#000';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  const guess = Number((document.querySelector('.guess').value = null));
};

const startGame = function () {
  document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    // When guess is not a number
    if (!guess) {
      document.querySelector('.message').textContent = 'No Number!';
      // When guess is correct
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = 'Correct Number!';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      if (score >= highScore) {
        highScore = document.querySelector('.highscore').textContent = score;
        console.log('HighScore added!' + highScore);
      }
    } else if (guess > secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent = 'Too High';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = 'Game over!';
      }
    } else if (guess < secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent = 'Too Low';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = 'Game over!';
      }
    }
  });
};

startGame();

document.querySelector('.again').addEventListener('click', function () {
  resetGame();
  console.log('button was clicked');
});
