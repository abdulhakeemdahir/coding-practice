'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');
const showModalBtn = document.querySelectorAll('.show-modal');

// Close Modal functionality
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
// Loops through button and initiates action
for (let i = 0; i < showModalBtn.length; i++) {
  showModalBtn[i].addEventListener('click', openModal);
  console.log(i);
}
// Close Modal functionality
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
// Call close modal on click
closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  console.log(e);
  if (e.key === 'Escape') {
    closeModal();
  }
});
