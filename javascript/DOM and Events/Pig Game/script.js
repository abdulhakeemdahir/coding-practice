'use strict';
const playerOne = document.querySelector('.player--0');
const playerTwo = document.querySelector('.player--1');
const playerOneScore = document.querySelector('#score--0');
const playerTwoScore = document.querySelector('#score--1');
// const playerOneCurrentScore = document.querySelector('#current--0');
// const playerTwoCurrentScore = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
playerOneScore.textContent = 0;
playerTwoScore.textContent = 0;
// playerOneCurrentScore.textContent = 0;
// playerTwoCurrentScore.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  playerOne.classList.toggle('player--active');
  playerTwo.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  const dice = Number(Math.trunc(Math.random() * 6) + 1);
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  if (dice !== 1) {
    currentScore += dice;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  scores[activePlayer] += currentScore;
  document.querySelector(`#score--${activePlayer}`).textContent =
    scores[activePlayer];

  // Switch player
  switchPlayer();
});

console.log('Start Game');
