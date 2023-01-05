let choices = ['r', 'p', 's'];

let userChoice = prompt('please enter r, p, or s to play the game');

let computerChoice = choices[Math.floor(Math.random() * 3)];
