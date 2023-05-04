
// Making buttons
let rockButton = document.querySelector(".rock");
let paperButton = document.querySelector(".paper");
let scissorsButton = document.querySelector(".scissors");

let rockResult = rockButton.addEventListener("click", () => { 
  console.log(playRound("rock"));
  //gameTxt.textContent = playRound("rock");
});

let paperResult = paperButton.addEventListener("click", () => { 
  console.log(playRound("paper"));
});

let scissorsResult = scissorsButton.addEventListener("click", () => { 
  console.log(playRound("scissors"));
}); 


//div elements
let score = document.querySelector(".scoreBoard");
let gameTxt = document.querySelector(".gameText");
let plaScore = document.querySelector(".playerScore");
let comScore = document.querySelector(".computerScore");





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

let playerScoreNumber = 0;
let computerScoreNumber = 0;

// for (let i = 1; i <= 20; i++) { 


if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
  //computerScoreNumber+= 1;
   // console.log("You Lose! Paper beats Rock");
   return "You Lose! Paper beats Rock";
    
}
else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
  //playerScoreNumber+= 1; 
   //console.log("You Win! Rock beats Scissors");
   return "You Win! Rock beats Scissors";
}

else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
 // playerScoreNumber+= 1; 
   //console.log("You Win! Paper beats Rock");
   return "You Win! Paper beats Rock";
}

else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
 // computerScoreNumber+= 1;
   //console.log("You Lose! Scissors beats Paper");
   return "You Lose! Scissors beats Paper";
}

else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
  //computerScoreNumber+= 1;
   //console.log("You Lose! Rock beats Scissors");
   return "You Lose! Rock beats Scissors";
}

else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
 // playerScoreNumber+= 1;  
   //console.log("You Win! Scissors beats Paper");
   return "You Win! Scissors beats Paper";
}

else {
    //console.log("Draw");
    return "Draw"
}




// } // ending loop




/*if( playerScoreNumber = 5) { 

console.log(playerScoreNumber);
 }

 else if (computerScoreNumber = 5) {
  console.log(computerScoreNumber);
 } */

}



// Testing - console.log(playRound("Paper"));



// testing - console.log(rockResult);

// making a scoreboard
//let score = document.querySelector(".scoreBoard");
//let plaScore = document.querySelector(".playerScore");

//plaScore.textContent = "Hey";

/*for (let i = 1; i <= 5; i++) {
  //playRound("rock");
  if (playRound("rock") == "You Win! Rock beats Scissors")  {
    plaScore.textContent = "You Won";

  }

  else {
    plaScore.textContent = "";
  }
 } */


// Plays 5 rounds of the game
function game() {


 // let playerScoreNumber = 0;
 // let computerScoreNumber = 0;
  /*for (let i = 1; i <= 2; i++) {
    //playRound();
    if (rockResult === "You Win! Rock beats Scissors")  {
      plaScore.textContent = "You Won";
      playerScoreNumber++;
      console.log(playerScoreNumber);
      //break;
    } 


    else (
      plaScore.textContent = ""
    ) 

    console.log(playRound("rock"));

   } 

   //console.log(playRound("rock")); */




  
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



}


//game();


