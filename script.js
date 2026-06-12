
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor (Math.random() * 3);
    return choices[randomIndex];
}


function getHumanChoice() {
    let choice = prompt("Choose rock, paper or scissors");
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    }
}


let humanScore = 0;
let ComputerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor (Math.random() * 3);
    return choices[randomIndex];
}


function getHumanChoice() {
    let choice = prompt("Choose rock, paper or scissors");
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log ("It's a tie!");
    }else if (
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper" 
    ) {
        console.log ("You Win!")
        humanScore ++;
    } else {
        console.log ("You Lose!")
        ComputerScore ++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();




