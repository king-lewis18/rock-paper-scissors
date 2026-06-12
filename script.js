
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
/*
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
*/


function getHumanChoice() {
    let choice = prompt("Choose rock, paper or scissors");
    return choice;
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log(`It's a tie! Both chose ${humanChoice}.\n`);
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`You win this round! ${humanChoice} beats ${computerChoice}.\n`);
            humanScore++;
        } else {
            console.log(`You lose this round! ${computerChoice} beats ${humanChoice}.\n`);
            computerScore++;
        }
    }

    
    for (let i = 1; i <= 5; i++) {
        console.log(`--- ROUND ${i} ---`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);
        console.log(`Current Score -> You: ${humanScore} | Computer: ${computerScore}\n`);
    }

    
    console.log("=== FINAL RESULT ===");
    if (humanScore > computerScore) {
        console.log(`Congratulations! You won the game ${humanScore} to ${computerScore}! `);
    } else if (computerScore > humanScore) {
        console.log(`Game Over! The computer won the game ${computerScore} to ${humanScore}. `);
    } else {
        console.log(`The match ends in a total tie! ${humanScore} to ${computerScore}.`);
    }
}





