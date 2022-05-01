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

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase()
    //computerSelection = computerSelection.toLowerCase()

    if (playerSelection === computerSelection) {
        return "It's a draw!"
    }else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "You Lose! Paper beats Rock"
        }else if (computerSelection === "scissors") {
            return "You Win! Rock beats Scissors"
        }

    }else if (playerSelection === "paper"){
        if (computerSelection === "rock"){
            return "You win! Paper beats Rock"
        }else if (computerSelection === "scissors"){
            return "You lose! Scissors beats Paper"
        }
        
    }else if(playerSelection === "scissors"){
        if (computerSelection === "paper"){
            return "You Win! Scissors beats Paper"
        }else if (computerSelection === "rock"){
            return "You Lose! Rock beats Scissors"
        }
    

    }
}

function game() {
    
    for (let i = 0; i < 5; i++){
        let playerInput = prompt("What do you want to play: ");


        console.log(playRound(playerInput, computerPlay()));
    }

}

game()
// const playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));


//console.log(computerPlay())