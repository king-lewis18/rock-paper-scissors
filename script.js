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
*/

// 1. Define the choice gathering functions
function getHumanChoice() {
    let choice = prompt("Round starting! Choose rock, paper, or scissors:").toLowerCase();
    return choice;
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// 2. Main Game Function
function playGame() {
    // Score variables must live inside playGame so they reset every new game
    let humanScore = 0;
    let computerScore = 0;

    // Inner helper function to play a single round and update the score
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

    // 3. Loop to play exactly 5 rounds
    for (let i = 1; i <= 5; i++) {
        console.log(`--- ROUND ${i} ---`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);
        console.log(`Current Score -> You: ${humanScore} | Computer: ${computerScore}\n`);
    }

    // 4. Declare the final winner after the loop finishes
    console.log("=== FINAL RESULT ===");
    if (humanScore > computerScore) {
        console.log(`Congratulations! You won the game ${humanScore} to ${computerScore}! `);
    } else if (computerScore > humanScore) {
        console.log(`Game Over! The computer won the game ${computerScore} to ${humanScore}. `);
    } else {
        console.log(`The match ends in a total tie! ${humanScore} to ${computerScore}.`);
    }
}

// 5. Call the function to start the game
playGame();