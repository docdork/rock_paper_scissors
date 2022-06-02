function computerPlay() {
    let choiceNum = Math.floor(Math.random() * (1 - 4) + 4);

    if (choiceNum === 1) {
        //console.log("Rock");
        return "rock";
        
    }else if (choiceNum === 2) {
        //console.log("Paper");
        return "paper";
    }else if (choiceNum === 3) {
        //console.log("Scissors");
        return "scissors";
    }else{
        //console.log("something went wrong");
        return "something went wrong";
    }

}


let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase()
    //computerSelection = computerSelection.toLowerCase()

    if (playerSelection === computerSelection) {
        return "It's a draw!"
    }else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computerScore += 1;
            return "You Lose! Paper beats Rock"
        }else if (computerSelection === "scissors") {
            playerScore += 1;
            return "You Win! Rock beats Scissors"
        }

    }else if (playerSelection === "paper"){
        if (computerSelection === "rock"){
            playerScore += 1;
            return "You win! Paper beats Rock"
            
        }else if (computerSelection === "scissors"){
            computerScore += 1;
            return "You lose! Scissors beats Paper"
        }
        
    }else if(playerSelection === "scissors"){
        if (computerSelection === "paper"){
            playerScore += 1;
            return "You Win! Scissors beats Paper"
        }else if (computerSelection === "rock"){
            computerScore += 1;
            return "You Lose! Rock beats Scissors"
        }
    

    }
}







function game() {
    
    const buttons = document.querySelectorAll('button');
    let gameOutcome = document.getElementById("gameOutcome");
    let playScore = document.getElementById("playerScore");
    let computScore = document.getElementById("computerScore");
    let winner = document.getElementById("winner");

    buttons.forEach((button) => {
        button.addEventListener('click', () => {

            let playerInput = button.id;
            gameOutcome.textContent = playRound(playerInput, computerPlay());
            playScore.textContent = playerScore;
            computScore.textContent = computerScore;

            if (playerScore >= 5) {
                console.log("Player wins");
                winner.textContent = "Player wins";
            } else if (computerScore >= 5) {
                console.log("Computer wins");
                winner.textContent = "Computer wins";
            }

        });
    });
}

game()