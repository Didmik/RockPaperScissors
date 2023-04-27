


function getComputerChoice() {
  const randomWords = ["Rock", "Paper", "Scissors"];
  let choice = "";
  
  choice = randomWords[Math.floor(Math.random() * randomWords.length)]

  return choice;

}

console.log(getComputerChoice());



function playRound(playerSelection, computerSelection) {
    
}