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