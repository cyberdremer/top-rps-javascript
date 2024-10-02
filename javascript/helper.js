function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    return choices[setRandomRange(3)];

}


function setRandomRange(num){
    return Math.floor(Math.random() * num);
}


function getHumanChoice(){
    let humanChoice  = prompt("Enter your choice: ").toLowerCase().trim();
    while(humanChoice !== "rock" && humanChoice !== "scissors" && humanChoice !== "paper"){
        humanChoice = prompt("Re-enter your choice: ");
    }
    return humanChoice;
}

