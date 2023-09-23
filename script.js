function game() {
    const rounds = 5;
    let currentRound = 1;

    // Scores
    let computerScore = 0;
    let playerScore = 0;

    // Play Round
    function playRound() {
        console.log(`%c ROUND ${currentRound}`, "font-size: 35px; color: powderblue;");

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
            console.warn("OPTION INVALID");
            return;
        }

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
        console.log(roundMessage);

        if(roundMessage === "ROUND WIN")
            ++playerScore;
        else if(roundMessage === "ROUND LOST")
            ++computerScore;

        ++currentRound;
    } 

    while(currentRound <= rounds)
        playRound();

    if(playerScore > computerScore)
        console.log("%c YOU WIN", "font-size: 35px; color: green;");
    else if(playerScore == computerScore)
        console.log("%c DRAW", "font-size: 35px; color: orange;");
    else 
        console.log("%c YOU LOST", "font-size: 35px; color: red;");
}

game();