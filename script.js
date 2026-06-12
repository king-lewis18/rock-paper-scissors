
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





