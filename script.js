// Weapon Buttons
const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorsButton = document.getElementById('scissors-button');

// Text Elements
const roundResultTxt = document.getElementById('round-result-message');
const gameResultTxt = document.getElementById('game-result-message')

// Rounds Elements
const rounds = 5;
let currentRound = 1;

// Scores
let computerScore = 0;
let playerScore = 0;

const playerScoreTxt = document.getElementById('player-score');
const computerScoreTxt = document.getElementById('computer-score');

function changeScore() {
    playerScoreTxt.textContent = `Player: ${playerScore}`;
    computerScoreTxt.textContent = `Computer: ${computerScore}`;
}

changeScore();

// Play Round
let canClick = true;

function playRound(playerSelection) {
    console.log(`%c ROUND ${currentRound}`, "font-size: 35px; color: powderblue;");

    // Computer Choice
    function getComputerChoice() {
        const options = ["R", "P", "S"];
        const randomIndex = Math.floor(Math.random() * options.length);

        return options[randomIndex];
    }
    let computerChoice = getComputerChoice();

    // Player Choice
    let playerChoice = playerSelection[0].toUpperCase();

    // Verifies if the choice from the user is valid
    /* function isOptionValid(option) {
        if(option.toUpperCase() != 'ROCK' && option.toUpperCase() != 'PAPER' && option.toUpperCase() != 'SCISSORS')
            return false;

        return true;
    }

    if(isOptionValid(playerChoice))
        playerChoice = playerChoice[0].toUpperCase();
    else {
        console.warn("OPTION INVALID");
        return;
    } */

    // Get the round result
    let roundMessage = null;

    // DRAW CASE
    if(playerChoice === computerChoice) {
        //console.log(playerChoice + " " + computerChoice);
        roundMessage = "ROUND DRAW";
    }

    //ROCK vs SCISSORS
    if(playerChoice === 'R' && computerChoice === 'S')
        roundMessage =  "ROUND WIN";
    else if(playerChoice === 'S' && computerChoice === 'R')
        roundMessage =  "ROUND LOST";
    
    // ROCK vs PAPER
    if(playerChoice === 'R' && computerChoice === 'P')
        roundMessage =  "ROUND LOST";
    else if(playerChoice === 'P' && computerChoice === 'R')
        roundMessage =  "ROUND WIN";

    // PAPER vs SCISSORS
    if(playerChoice === 'P' && computerChoice === 'S')
        roundMessage =  "ROUND LOST";
    else if(playerChoice === 'S' && computerChoice === 'P')
        roundMessage =  "ROUND WIN";

    // Round Result
    console.log(`Player Choice: ${playerChoice}`);
    console.log(`Computer Choice: ${computerChoice}`);
    roundResultTxt.textContent = roundMessage;

    if(roundMessage === "ROUND WIN")
        ++playerScore;
    else if(roundMessage === "ROUND LOST")
        ++computerScore;

    changeScore();

    if(currentRound === rounds) {
        if(playerScore > computerScore)
            gameResultTxt.textContent = "YOU WIN";
        else if(playerScore === computerScore)
            gameResultTxt.textContent = "DRAW";
        else
            gameResultTxt.textContent = "YOU LOST";
        ++currentRound;
    }
    else {
        ++currentRound;
    }
    canClick = true;
}

// Buttons Events
rockButton.addEventListener('click', () => {
    if(canClick === true && currentRound <= rounds) {
        canClick = false;
        playRound('rock');
    }
})

scissorsButton.addEventListener('click', () => {
    if(canClick === true && currentRound <= rounds) {
        canClick = false;
        playRound('scissors');
    }
})

paperButton.addEventListener('click', () => {
    if(canClick === true && currentRound <= rounds) {
        canClick = false;
        playRound('paper');
    }
})