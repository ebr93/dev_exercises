let promptValue = undefined;
let guessValue = undefined;
let messageValue = '';
let guessArray = [];

while (promptValue === undefined || 
    !(promptValue > 1)) {
    promptValue = prompt('Input the Max Number value');
}

const randomNumber = Math.round(Math.random() * (promptValue) + 1);
console.log(`Random Number: ${randomNumber}`);

const rangeDiv = document.querySelector('#number-range');
rangeDiv.innerText = `Guess a Number between 1 and ${promptValue}`

function guessSumbit() {
    guessValue = prompt(`Enter your guess, a number between 1 and ${promptValue}`);

    switch(guessValue) {
        case !(guessValue instanceof Number): 
        messageValue = 'That is not a number';
        case (guessValue < 1 || guessValue > promptValue):
        messageValue =  'That number is not in range, try again.';
        case (guessArray.find(guessValue) !== undefined):
        messageValue = 'You have tried to guess this number before. Try a different one.'
        default:
        guessArray.push(guessValue);
    }
}


const messageDiv = document.querySelector('#message');
const countDiv = document.querySelector('#guess-count');
function messageProcess() {

}