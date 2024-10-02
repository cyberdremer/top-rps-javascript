let computerScore = 0;
let humanScore = 0;


function playRound(humanChoice, computerChoice){
    if(humanChoice === "rock"){
        if(computerChoice === "rock"){
            console.log("It's a tie");
        }
        else if(computerChoice === "paper"){
            console.log("The computer has won");
            computerScore++;
        }
        else{
            console.log("The human won.");
            humanScore++;
        }
    }
    else if(humanChoice === "paper"){
        if(computerChoice === "rock"){
            console.log("The human has won!");
            humanChoice++;
        }
        else if(computerChoice === "paper"){
            console.log("Tie game");
           
        }
        else{
            console.log("The computer won.");
            humanScore++;
        }

    }
    else if(humanChoice === "scissors"){
        if(computerChoice === "rock"){
            console.log("The computer won");
            computerScore++;
        }
        else if(computerChoice == "paper"){
            console.log("The human won.");
            humanScore++;
        }
        else{
            console.log("Tie game");
        }
        
        
    }

}


function playGame(){
    let computerChoice, humanChoice;
    computerScore = 0;
    humanScore = 0;
    for(let i = 0; i < 5; i++){
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    console.log("The computer has won: " + computerScore + " times.");
    console.log("The human has won: " + humanScore + " times.");
}