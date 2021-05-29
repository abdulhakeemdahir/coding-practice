'use strict';
const secretNumberFunction = function () {
  return Math.trunc(Math.random() * 20) + 1;
};
let secretNumber = secretNumberFunction();
console.log(secretNumber);
let highScore = (document.querySelector('.highscore').textContent = 0);
let score = 20;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
let resetGame = function () {
  secretNumber = secretNumberFunction();
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
};

const startGame = function () {
  document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    // When guess is not a number
    if (!guess) {
      displayMessage('No Number!');
      // When guess is correct
    } else if (guess === secretNumber) {
      displayMessage('Correct Number!');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      if (score > highScore) {
        highScore = document.querySelector('.highscore').textContent = score;
        console.log('HighScore added!' + highScore);
      }
      // When guess is wrong
    } else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(guess > secretNumber ? 'Too High' : 'Too Low');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('Game Over!');
      }
    }
  });
};

startGame();

document.querySelector('.again').addEventListener('click', function () {
  resetGame();
  console.log('button was clicked');
});
