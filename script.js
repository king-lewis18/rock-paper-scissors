/*
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor (Math.random() * 3);
    return choices[randomIndex];
}

console.log(getComputerChoice());


let choice = prompt("What is your choice? Rock, Paper or Scissors");

function getHumanChoice() {
    if (choice === "rock" || choice === "paper" || choice === "scissors")
        return choice;
} 
console.log (getHumanChoice());
*/

let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
    let choice = prompt ("What is your choice? Rock, Paper or Scissors")
    if (choice === "rock" || choice === "paper" || choice === "scissors")
        return choice;
}
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random () * 3);
    return choices[randomIndex];
}

function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log ("It's a tie!");
    } 
    else if (humanChoice === "rock" && computerChoice === "scissors" ||
             humanChoice === "paper" && computerChoice === "rock" ||
             humanChoice === "scissors" && computerChoice === "paper"
    ) {
        console.log ("You win!") 
        humanSCore ++;
    }
    else {
        console.log ("You lose");
        computerScore ++;
    }
}
const humanSelection = getHumanChoice ();
const computerSelection = getComputerChoice ();

console.log (playRound(humanSelection, computerSelection));