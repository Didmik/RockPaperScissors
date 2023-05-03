

// Random choice by the computer
function getComputerChoice() {
  const randomWords = ["rock", "paper", "scissors"];
  let choice = "";
  
  choice = randomWords[Math.floor(Math.random() * randomWords.length)]

  return choice;

}

//console.log(getComputerChoice());


// Plays a round of the game
function playRound(playerSelection, computerSelection) {

computerSelection = getComputerChoice();
//console.log(computerSelection);

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



// Testing - console.log(playRound("Paper"));

// Making buttons
let rockButton = document.querySelector(".rock");
let paperButton = document.querySelector(".paper");
let scissorsButton = document.querySelector(".scissors");

rockButton.addEventListener("click", () => { 
  console.log(playRound("rock"));
});

paperButton.addEventListener("click", () => { 
  console.log(playRound("paper"));
});

scissorsButton.addEventListener("click", () => { 
  console.log(playRound("scissors"));
});



// Plays 5 rounds of the game
function game() {
  /*for (let i = 1; i <= 5; i++) {
    
  } */

  
//trying the game with prompt input
 /*let message = prompt("choose Rock, Paper or Scissors")

  if (message.toLowerCase() === "rock") {
    return playRound("rock");
  }

  else if (message.toLowerCase() === "paper") {
    return playRound("paper");
  }

  else if (message.toLowerCase() === "scissors") {
    return playRound("scissors");
  } */


  let rockButton = document.querySelector(".rock");
  const paperButton = document.querySelector(".paper");
  const scissorButton = document.querySelector(".scissors");

  rockButton.addEventListener("click", () => { 
    playRound();
    console.log(playRound);
  });

}


//console.log(game());

