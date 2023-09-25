// Weapon Buttons
const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorsButton = document.getElementById('scissors-button');

// Reset Button
const resetButton = document.getElementById('reset-button');

// Text Elements
const roundResultTxt = document.getElementById('round-result-message');
const gameResultTxt = document.getElementById('game-result-message')

// Rounds Elements
const rounds = 5;
let currentRound = 1;
const roundTxt = document.getElementById('round-text');

function changeRound() {
    roundTxt.textContent = `Round ${currentRound}`;
}
changeRound();

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

    // Icon Show
    setIcons(playerChoice, computerChoice);
    playerIcon.className = 'icon-in-animation';
    computerIcon.className = 'icon-in-animation';

    setTimeout(() => {
        if(roundMessage === "ROUND WIN") {
            ++playerScore;
            playerIcon.className = 'icon-highlight-animation';
        }
        else if(roundMessage === "ROUND LOST") {
            ++computerScore;
            computerIcon.className = 'icon-highlight-animation';
        }

        setTimeout(() => {
            roundResultTxt.className = 'text-in-animation';
            roundResultTxt.textContent = roundMessage;
        }, 300);
    }, 500);

    setTimeout(() => {
        roundResultTxt.className = 'text-out-animation';

        setTimeout(() => {
            changeScore();

            playerIcon.className = 'icon-out-animation';
            computerIcon.className = 'icon-out-animation';
            setTimeout(() => {
                playerIcon.setAttribute('src', '');
                computerIcon.setAttribute('src', '');

                if(currentRound === rounds) {
                    if(playerScore > computerScore)
                        gameResultTxt.textContent = "YOU WIN";
                    else if(playerScore === computerScore)
                        gameResultTxt.textContent = "DRAW";
                    else
                        gameResultTxt.textContent = "YOU LOST";
                    ++currentRound;
                    
                    resetButton.className = 'text-in-animation';
                    gameResultTxt.className = 'text-in-animation';
                }
                else {
                    ++currentRound;
                    changeRound();
                    canClick = true;
                }
            }, 300);

        }, 400); 
        
    }, 1500);
}

// Icon Elements
const playerIcon = document.getElementById('player-icon');
const computerIcon = document.getElementById('computer-icon');

const rockIcon = './img/stone.png';
const paperIcon = './img/paper.png';
const scissorsIcon = './img/scissor.png';

// Gets the icons of weapons
function getIcon(selection) {
    if(selection === 'S')
        return scissorsIcon;
    else if(selection === 'R')
        return rockIcon;
    else if(selection === 'P')
        return paperIcon;
}

// Sets the icons of weapons
function setIcons(playerSelection, computerSelection) {
    playerIcon.setAttribute('src', getIcon(playerSelection));
    computerIcon.setAttribute('src', getIcon(computerSelection));
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

resetButton.addEventListener('click', () => {
    resetButton.className = 'text-out-animation';
    gameResultTxt.className = 'text-out-animation';
    setTimeout(() => {
        // Resetting every variable
        playerScore = 0;
        computerScore = 0;
        currentRound = 1;
        canClick = true;

        changeScore();
        changeRound();
    }, 300)
})