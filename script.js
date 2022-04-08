'use strict';

// Selecting elements
const score0_el = document.getElementById('score--0');
const score1_el = document.getElementById('score--1');
const dice_el = document.querySelector('.dice');

// Starting conditions
score0_el.textContent = 0;
score1_el.textContent = 0;
dice_el.classList.add('hidden');