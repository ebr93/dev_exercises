const coin = {
    position: undefined,
    playerPosition: undefined,
};

const scores = {
    player: 0,
    computer: 0
};

// sets Player position for each round
function playerPick(playerPosition) {
    coin.playerPosition = `${playerPosition}`;
}

// flips coin randomly
function coinFlip() {
    const flipValue = Math.round(Math.random() * (2-1) + 1);
    // delete later
    // console.log(flipValue);
    if (flipValue === 2) coin.position = 'tails';
    else coin.position = 'heads';
}

// updates page based on flip, updates score
function coinCheck() {
    const imgPosition = document.querySelector('#imgPosition');
    const imgCoin = document.createElement('img');
    imgCoin.classList = 'img-two img-thumbnail';
    const imgSRC = coin.position === 'heads' ? './images/heads.png' : './images/tails.png';
    imgCoin.src = imgSRC;
    imgPosition.innerHTML = '';
    imgPosition.appendChild(imgCoin);

    const imgText = document.querySelector('#imgText')

    console.log(`Player:${coin.playerPosition} Coin: ${coin.position}`);
    if (coin.playerPosition === coin.position && coin.playerPosition === 'heads') {
        imgText.innerText = 'You picked Heads!\nThe coin flips and comes up Heads!\nYou Win!'
        scores.player++;
        const playerScore = document.querySelector('#player-score');
        playerScore.innerText = `Player: ${scores.player}`
    } else if (coin.playerPosition === coin.position && coin.playerPosition === 'tails') {
        imgText.innerText = 'You picked Tails!\nThe coin flips and comes up Tails!\nYou Win!'
        scores.player++;
        const playerScore = document.querySelector('#player-score');
        playerScore.innerText = `Player: ${scores.player}`
    } else if (coin.playerPosition !== coin.position && coin.playerPosition === 'heads') {
        imgText.innerText = 'You picked Heads!\nThe coin flips and comes up Tails!\nYou Lose'
        scores.computer++;
        const computerScore = document.querySelector('#computer-score');
        computerScore.innerText = `CPU: ${scores.computer}`
    } else {
        imgText.innerText = 'You picked Tails!\nThe coin flips and comes up Heads!\nYou Lose'
        scores.computer++;
        const computerScore = document.querySelector('#computer-score');
        computerScore.innerText = `CPU: ${scores.computer}`
    }
}

const coinBtns = document.querySelectorAll('.coinbtn');

// event listener when HEADS or TAILS buttons are picked
coinBtns.forEach(coinBtn => {
    coinBtn.addEventListener('click', (e) => {
        console.log(e.target.id);
        playerPick(e.target.id);
        coinFlip();
        coinCheck();
    })
})