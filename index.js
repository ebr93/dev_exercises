// Proceeded to use Bootstrap, as it presents more of a challenge, examples of Vanilla HTML/CSS in portfolio. Decided to break 
// down functions to delegate logic and DOM manipulation. Deployed Website: https://ebr93.github.io/dev_exercises/

// value for max number
let promptValue = undefined;
let messageValue = '';
// array to store guess values
// CRITERIA 3 0F 4 (A): TRACK THE GUESSES 
let guessArray = [];
// will stop game from running after random number is found
let gameOver = false;

// will keep attempting to prompt until a valid max number is input
// CRITERIA 1 0F 4 (A): PROMPT FOR MAX NUMBER 
while (promptValue === undefined || 
    !(promptValue > 1)) {
    console.log(promptValue);
    promptValue = prompt('Input the Max Number value');
    if (!isNaN(promptValue)) promptValue = Math.round(promptValue);
    console.log(promptValue);
}

// sets random number once prompt value is entered
// CRITERIA 1 0F 4 (B): PROMPT FOR MAX NUMBER 
const randomNumber = Math.round(Math.random() * (promptValue-1) +1);
console.log(`Random Number: ${randomNumber}`);

// makes changes to DOM after valid max number is input
const rangeDiv = document.querySelector('#number-range');
rangeDiv.innerText = `Guess a Number between 1 and ${promptValue}`

// checks validity of guess
// CRITERIA 2 0F 4: VALIDATES THE GUESS
function guessCheck(checkNum) {
    // CRITERIA 1 0F 4: IF THE USER INPUTS A DECIMAL, APPLICATION ROUNDS IT
    checkNum = Math.round(Number(checkNum));
    if (isNaN(checkNum)) {
        messageValue = 'That is not a number';
    } else if (checkNum < 1 || checkNum > promptValue) {
        messageValue =  'That number is not in range, try again.';
        // CRITERIA 4 0F 4: CHECKS FOR DUPLICATES
    } else if (guessArray.includes(checkNum)) {
        messageValue = 'You have tried to guess this number before. Try a different one.';
    } else if (checkNum === randomNumber) {
        // CRITERIA 3 0F 4 (B): TRACK THE GUESSES 
        guessArray.push(checkNum);
        messageSuccess();
        gameOver = true;
    } else if (checkNum > randomNumber) {
        // CRITERIA 3 0F 4 (B): TRACK THE GUESSES 
        guessArray.push(checkNum);
        messageValue = `No, try a lower number.`;
    } else if (checkNum < randomNumber) {
        // CRITERIA 3 0F 4 (B): TRACK THE GUESSES 
        guessArray.push(checkNum);
        messageValue = `No, try a higher number.`;
    }
}

// message that processes if right number is guessed
// CRITERIA 3 0F 4 (C): TRACK THE GUESSES 
function messageSuccess() {
    messageValue = `You got it! It took you ${guessArray.length} tries and your guesses were `;
    for (let i = 0; i < guessArray.length; i++) {
        if (i === guessArray.length - 1) {
            messageValue += ` ${guessArray[i]}`
        } else {
            messageValue += ` ${guessArray[i]},`
        }
    }
}

// processes manipulation of DOM to show message
function messageProcess() {
    const messageDiv = document.querySelector('#message-p');
    const countDiv = document.querySelector('#guess-count');
    messageDiv.innerText = `${messageValue}`;
    countDiv.innerText = `Guess Count: ${guessArray.length}`;
}


// event listener based on button clicked
const guessBtn = document.querySelector('#guess-btn');
guessBtn.addEventListener('click', () => {
    const guessValue = document.querySelector('#number-input').value;
    
    // if any conditions met then stops from running other functions
    if (guessValue === '' || guessValue === null || gameOver) return;

    guessCheck(guessValue);
    messageProcess();
})