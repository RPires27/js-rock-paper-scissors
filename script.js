// Function to randomly choose between Rock, Paper and Scissors from PC
function getComputerChoise() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}
// Function to check plays and see who won
function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "rock")
    return "Draw - You choosed Rock | Computer choosed Rock";
  else if (playerSelection == "rock" && computerSelection == "paper")
    return "L - You choosed Rock | Computer choosed Paper";
  else if (playerSelection == "rock" && computerSelection == "scissors")
    return "Ez W - You choosed Rock | Computer choosed Scissors";
  else if (playerSelection == "paper" && computerSelection == "paper")
    return "Draw - You choosed Paper | Computer choosed Paper";
  else if (playerSelection == "paper" && computerSelection == "scissors")
    return "L - You choosed Paper | Computer choosed Scissors";
  else if (playerSelection == "paper" && computerSelection == "rock")
    return "W - You choosed Paper | Computer choosed Rock";
  else if (playerSelection == "scissors" && computerSelection == "scissors")
    return "Draw - You choosed Scissors | Computer choosed Scissors";
  else if (playerSelection == "scissors" && computerSelection == "paper")
    return "W - You choosed Scissors | Computer choosed Paper";
  else if (playerSelection == "scissors" && computerSelection == "rock")
    return "L - You choosed Scissors | Computer choosed Rock";
}
let playerSelection;
let computerSelection;
// Function to execute game
function playGame() {
  getInputs();
  console.log(playRound(playerSelection, computerSelection));
  getInputs();

  console.log(playRound(playerSelection, computerSelection));
  getInputs();

  console.log(playRound(playerSelection, computerSelection));
  getInputs();

  console.log(playRound(playerSelection, computerSelection));
  getInputs();

  console.log(playRound(playerSelection, computerSelection));
}
//Function to update choices
function getInputs() {
  computerSelection = getComputerChoise();
  playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
  if (
    playerSelection != "rock" &&
    playerSelection != "scissors" &&
    playerSelection != "paper"
  ) {
    getInputs();
  }
}
