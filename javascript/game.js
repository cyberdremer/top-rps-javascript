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


const container = document.querySelector("body");
const weaponSelections = document.querySelector(".selections");
const humanScoreSpan = document.querySelector('#human-score');
const computerScoreSpan = document.querySelector('#computer-score');
const computerChoiceSpan = document.querySelector('#computer-choice');


weaponSelections.addEventListener('click', (Event) =>{
    let selection = Event.target;
    if(selection.id === "rock" || selection.id === "paper" || selection.id === "scissors"){
        let computerChoice = getComputerChoice();
        playRound(selection.id, computerChoice);
        computerChoiceSpan.textContent = computerChoice.toUpperCase();
        computerScoreSpan.textContent = computerScore;
        humanScoreSpan.textContent = humanScore;
    }
})
