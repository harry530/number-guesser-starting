let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

let generateTarget = () => Math.floor(Math.random() * 9);
let compareGuesses = (hGuess, cGuess, stNumber) => Math.abs(hGuess - stNumber) <= Math.abs(cGuess - stNumber) ? true : false;
let updateScore = param => param === 'human' ? humanScore += 1 : computerScore += 1;
let advanceRound = () => currentRoundNumber += 1;
