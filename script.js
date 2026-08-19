let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomIndex];
  document.getElementById('computer-move').innerHTML = computerChoice;
  return computerChoice;
}


function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    document.getElementById('human-move').innerHTML = humanChoice;
    if (humanChoice === computerChoice) {
        document.getElementById('result').innerHTML = "It's a tie!";
    }else if(
      (humanChoice === 'rock' && computerChoice === 'scissors') ||
      (humanChoice === 'paper' && computerChoice === 'rock') ||
       (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
       document.getElementById('result').innerHTML = "You win!";
       humanScore++;
    }else {
       document.getElementById('result').innerHTML = "Computer wins!";
       computerScore++;
    }

    document.getElementById('score').innerHTML = `Scores: You - ${humanScore}, Computer - ${computerScore}`;
}

document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));




