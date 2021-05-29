'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');
const showModalBtn = document.querySelectorAll('.show-modal');

for (let i = 0; i < showModalBtn.length; i++) {
  showModalBtn[i].addEventListener('click', function () {
    console.log('Button Clicked ' + (i + 1));
  });
}
