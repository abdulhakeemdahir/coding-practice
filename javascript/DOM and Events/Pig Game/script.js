'use strict';

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

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
});

console.log(rollDice());
