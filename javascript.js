


function getComputerChoice() {
  const randomWords = ["rock", "paper", "scissors"];
  let choice = "";
  
  choice = randomWords[Math.floor(Math.random() * randomWords.length)]

  return choice;

}

//console.log(getComputerChoice());



function playRound(playerSelection, computerSelection) {

computerSelection = getComputerChoice();
console.log(computerSelection);

if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
    return "You Lose! Paper beats Rock";
}
else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
    return "You Win! Rock beats Scissors";
}

else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
    return "You Win! Paper beats Rock";
}

else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
    return "You Lose! Scissors beats Paper";
}

else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
    return "You Lose! Rock beats Scissors";
}

else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
    return "You Win! Scissors beats Paper";
}

else {
    return "Draw";
}

}


console.log(playRound("Paper"));
