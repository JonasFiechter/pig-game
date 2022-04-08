'use strict';

// Selecting elements
const score0_el = document.getElementById('score--0');
const score1_el = document.getElementById('score--1');
const dice_el = document.querySelector('.dice');
const btn_roll = document.querySelector('.btn--roll');
const btn_hold = document.querySelector('.btn--hold');
const btn_new = document.querySelector('.btn--new');

// Starting conditions
score0_el.textContent = 0;
score1_el.textContent = 0;
dice_el.classList.add('hidden');

btn_roll.addEventListener('click', function() {
    // Generating a random dice r oll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // Showing dice
    dice_el.src = `dice-${dice}.png`
    dice_el.classList.remove('hidden')

    //check for rolled 1:
    if (dice !== 1){

    } else {
        // switch to next player
    }
})