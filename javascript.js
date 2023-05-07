

// Numbers

let playerScoreNumber = 0;
let computerScoreNumber = 0;



// Buttons

const buttons = document.querySelectorAll("button");

let rockButton = document.querySelector(".rock");
let paperButton = document.querySelector(".paper");
let scissorsButton = document.querySelector(".scissors");




// Scoreboard
/*let score = document.querySelector(".scoreBoard");
let gameTxt = document.querySelector(".gameText");
let plaScore = document.querySelector(".playerScore");
let comScore = document.querySelector(".computerScore"); */



function disableButtons() {
  buttons.forEach(cli => {
    cli.disabled = true;
  })
}




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
let result = "";
//console.log(computerSelection);



/*if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
  computerScoreNumber++;
  roundWinner = "computer";
   // console.log("You Lose! Paper beats Rock");
   return "You Lose! Paper beats Rock"; 
} */

if ((playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") ||
    (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") ||
    (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper")) {
    
    playerScoreNumber++; 
    result = ('You win! ' + playerSelection + ' beats ' + computerSelection
    + "<br><br>Player score: " + playerScoreNumber + "<br>Computer score: " + computerScoreNumber);

   //console.log("You Win! Rock beats Scissors");
   //return "You Win! Rock beats Scissors";

    if (playerScoreNumber == 5) {
      result += '<br><br>You won the game! Reload the page to play again'
      disableButtons();  
    }
}

/*
if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
   playerScoreNumber++;
   roundWinner = "player";
   //console.log("You Win! Paper beats Rock");
   return "You Win! Paper beats Rock";
} */

else if ((playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") ||
         (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") ||
         (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock")) {
   
         computerScoreNumber++;
         result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
            + "<br><br>Player score: " + playerScoreNumber + "<br>Computer score: " + computerScoreNumber);


          if (computerScoreNumber == 5) {
            result += '<br><br>Computer won the game! Reload the page to play again'
            disableButtons();
          }
   //console.log("You Lose! Scissors beats Paper");
   //return "You Lose! Scissors beats Paper";
}

/*if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
   computerScoreNumber++;
   roundWinner = "computer";
   //console.log("You Lose! Rock beats Scissors");
   return "You Lose! Rock beats Scissors";
}

if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
  playerScoreNumber++;
  roundWinner = "player";  
   //console.log("You Win! Scissors beats Paper");
   return "You Win! Scissors beats Paper";
} */

else if (playerSelection === computerSelection) {
    //console.log("Draw");
    result = ('It\'s a tie. You both chose ' + playerSelection
    + "<br><br>Player score: " + playerScoreNumber + "<br>Computer score: " + computerScoreNumber);
}


/*if( playerScoreNumber = 5) { 

console.log(playerScoreNumber);
 }

 else if (computerScoreNumber = 5) {
  console.log(computerScoreNumber);
 } */

// checkingWinner(roundWinner, playerSelection, computerSelection);


document.querySelector('.scoreBoard').innerHTML = result
return


} // Ending playRound


/*let rockResult = rockButton.addEventListener("click", () =>  { 
  console.log(playRound("rock")); 
  });*/

  rockButton.addEventListener("click", () => {
    playRound("rock")
  });  
    

  //gameTxt.textContent = playRound("rock");


  paperButton.addEventListener("click", () => {
    playRound("paper")
  }); 



  scissorsButton.addEventListener("click", () => { 
    playRound("scissors")
  }); 



/*function buttonClicks(playerSelection) {
  plaScore.textContent = "hey";
  return;
}



function checkingWinner(winner, playerSelection, computerSelection) {
  if (winner === "player") {
    gameTxt.textContent = playerSelection;
    return;
  }

  else if (winner ===  "computer") {
    gameTxt.textContent = computerSelection;
    return; 

  }
} */





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
//function game() {

  
    //console.log(playRound("rock"));
    
    
  


 // let playerScoreNumber = 0;
 // let computerScoreNumber = 0;
  //for (let i = 1; i <= 2; i++) {
    //playRound();
    /*if (rockResult === "You Win! Rock beats Scissors")  {
      plaScore.textContent = "You Won";
      //break;
    } 


    else (
      plaScore.textContent = ""
    ) 

    console.log(rockResult); */

   //} 

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



//}





//game();


