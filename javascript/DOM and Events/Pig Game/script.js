'use strict';
const playerOne = document.querySelector('.player--0');
const playerTwo = document.querySelector('.player--1');
const playerOneScore = document.querySelector('#score--0');
const playerTwoScore = document.querySelector('#score--1');
const playerOneCurrentScore = document.querySelector('#current--0');
const playerTwoCurrentScore = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
playerOneScore.textContent = 0;
playerTwoScore.textContent = 0;
playerOneCurrentScore.textContent = 0;
playerTwoCurrentScore.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

btnRoll.addEventListener('click', function () {
  const dice = Number(Math.trunc(Math.random() * 6) + 1);
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  if (dice !== 1) {
    currentScore += dice;
    playerOneCurrentScore.textContent = currentScore;
  } else {
    playerOne.classList.remove('player--active');
    playerTwo.classList.add('player--active');
  }
});

console.log(rollDice());
