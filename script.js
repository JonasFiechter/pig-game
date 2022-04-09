'use strict';

// Selecting elements
const player_0_el = document.querySelector('.player--0');
const player_1_el = document.querySelector('.player--1');
const score0_el = document.getElementById('score--0');
const score1_el = document.getElementById('score--1');
const dice_el = document.querySelector('.dice');
const btn_roll = document.querySelector('.btn--roll');
const btn_hold = document.querySelector('.btn--hold');
const btn_new = document.querySelector('.btn--new');
const current_score_0 = document.getElementById('current--0');
const current_score_1 = document.getElementById('current--1');

// Temporary elements
let scores = [0, 0];
let current_score = 0;
let current_player = 0;
let running = true

// Starting conditions
const new_game = () => {
    score0_el.textContent = 0;
    score1_el.textContent = 0;
    dice_el.classList.add('hidden');
    btn_hold.classList.remove('hidden')
    btn_roll.classList.remove('hidden')
    scores = [0, 0];
    current_score = 0;
    running = true;
    document.querySelector(`.player--${current_player}`).classList.remove('player--winner');

    if (current_player == 0) {
        document.getElementById(`name--${current_player}`).textContent = `PLAYER 1`
    } else {
        document.getElementById(`name--${current_player}`).textContent = `PLAYER 2`
    }
    console.log(current_player)
    switch_player()    
}


const switch_player = () => {
    current_score = 0
    player_0_el.classList.toggle('player--active');
    player_1_el.classList.toggle('player--active');
    return current_player = current_player === 0 ? 1 : 0;
}


btn_roll.addEventListener('click', () => {
    // Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // Showing dice
    dice_el.src = `dice-${dice}.png`;
    dice_el.classList.remove('hidden');

    //check for rolled 1:
    if (dice !== 1) {
        current_score += dice;
        document.getElementById(`current--${current_player}`).textContent = current_score;
    } else {
        document.getElementById(`current--${current_player}`).textContent = 0;
        switch_player()
    }
})


btn_hold.addEventListener('click', () => {
    scores[current_player] += current_score
    document.getElementById(`score--${current_player}`).textContent = scores[current_player];
    document.getElementById(`current--${current_player}`).textContent = 0
    if (scores[current_player] >= 10) {
        document.querySelector(`.player--${current_player}`).classList.add('player--winner');
        running = false
    } else {
    switch_player()
    }
    if (running === false) {
        btn_hold.classList.add('hidden');
        btn_roll.classList.add('hidden');
        dice_el.classList.add('hidden');
        document.getElementById(`name--${current_player}`).textContent = 'Winner!'
    }
})

btn_new.addEventListener('click', new_game)