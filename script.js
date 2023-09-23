function game() {
    // Computer Choice
    function getComputerChoice() {
        const options = ["R", "P", "S"];
        const randomIndex = Math.floor(Math.random() * options.length);

        return options[randomIndex];
    }
    let computerChoice = getComputerChoice();

    // Player Choice
    let playerChoice = prompt("Select your weapon for this round (rock, paper or scissors): ");

    // Verifies if the choice from the user is valid
    function isOptionValid(option) {
        if(option.toUpperCase() != 'ROCK' && option.toUpperCase() != 'PAPER' && option.toUpperCase() != 'SCISSORS')
            return false;

        return true;
    }

    if(isOptionValid(playerChoice))
    playerChoice = playerChoice[0].toUpperCase();
    else {
        console.error("OPTION INVALID");
        playerChoice = null;
    }

    // Play Round
    function playRound(playerSelection, computerSelection) {
        // DRAW CASE
        if(playerSelection === computerSelection) {
            //console.log(playerSelection + " " + computerSelection);
            return "DRAW";
        }

        //ROCK vs SCISSORS
        if(playerSelection === 'R' && computerSelection === 'S')
            return "YOU WIN";
        else if(playerSelection === 'S' && computerSelection === 'R')
            return "YOU LOST";
        
        // ROCK vs PAPER
        if(playerSelection === 'R' && computerSelection === 'P')
            return "YOU LOST";
        else if(playerSelection === 'P' && computerSelection === 'R')
            return "YOU WIN";

        // PAPER vs SCISSORS
        if(playerSelection === 'P' && computerSelection === 'S')
            return "YOU LOST";
        else if(playerSelection === 'S' && computerSelection === 'P')
            return "YOU WIN";
    } 

    // Round Result
    console.log(`Player Choice: ${playerChoice}`);
    console.log(`Computer Choice: ${computerChoice}`);
    console.log(playRound(playerChoice, computerChoice));
}

game()