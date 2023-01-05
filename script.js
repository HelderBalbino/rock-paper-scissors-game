let choices = ['r', 'p', 's'];
let wins = 0;
let losses = 0;
let ties = 0;

let userChoice = prompt('please enter r, p, or s to play the game');

let computerChoice = choices[Math.floor(Math.random() * choices.length)];
