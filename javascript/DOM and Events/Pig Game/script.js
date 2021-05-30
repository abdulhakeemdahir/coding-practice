'use strict';

let playerOneScore = (document.querySelector('#score--0').textContent = 17);
let playerTwoScore = (document.querySelector('#score--1').textContent = 17);
let playerOneCurrentScore = (document.querySelector(
  '#current--0'
).textContent = 17);
let playerTwoCurrentScore = (document.querySelector(
  '#current--1'
).textContent = 17);

const rollDice = function () {
  return Math.trunc(Math.random() * 6) + 1;
};

console.log(rollDice());
