const rock = document.createElement("button");
rock.textContent = "Rock";

const paper = document.createElement("button");
paper.textContent = "Paper";

const scissors = document.createElement("button");
scissors.textContent = "Scissors";

const resetButton = document.createElement("button");
resetButton.textContent = "Reset";

const finalResult = document.createElement("div");

const body = document.querySelector("body");
body.appendChild(rock);
body.appendChild(paper);
body.appendChild(scissors);

rock.addEventListener("click", () => {
  playRound("rock", getComputerChoise());
});
paper.addEventListener("click", () => {
  playRound("paper", getComputerChoise());
});
scissors.addEventListener("click", () => {
  playRound("scissors", getComputerChoise());
});

resetButton.addEventListener("click", () => {
  resetGame();
});

let playerScore = 0;
let computerScore = 0;

const displayResult = document.createElement("div");
const displayScore = document.createElement("div");
displayScore.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
body.appendChild(displayScore);

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
  if (playerSelection == "rock" && computerSelection == "rock") {
    body.appendChild(displayResult);
    displayResult.textContent =
      "Draw - You choosed Rock | Computer choosed Rock";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    body.appendChild(displayResult);
    displayResult.textContent = "L - You choosed Rock | Computer choosed Paper";
    computerScore++;
    displayScore.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    body.appendChild(displayResult);
    displayResult.textContent =
      "W - You choosed Rock | Computer choosed Scissors";
    playerScore++;
    displayScore.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
  } else if (playerSelection == "paper" && computerSelection == "paper") {
    body.appendChild(displayResult);
    displayResult.textContent =
      "Draw - You choosed Paper | Computer choosed Paper";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    body.appendChild(displayResult);
    displayResult.textContent =
      "L - You choosed Paper | Computer choosed Scissors";
    computerScore++;
    displayScore.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    body.appendChild(displayResult);
    displayResult.textContent = "W - You choosed Paper | Computer choosed Rock";
    playerScore++;
    displayScore.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
  } else if (playerSelection == "scissors" && computerSelection == "scissors") {
    body.appendChild(displayResult);
    displayResult.textContent =
      "Draw - You choosed Scissors | Computer choosed Scissors";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    body.appendChild(displayResult);
    displayResult.textContent =
      "W - You choosed Scissors | Computer choosed Paper";
    playerScore++;
    displayScore.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    body.appendChild(displayResult);
    displayResult.textContent =
      "L - You choosed Scissors | Computer choosed Rock";
    computerScore++;
    displayScore.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
  }

  // Check if either player or computer has reached 5 points
  if (playerScore === 5 || computerScore === 5) {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;

    body.appendChild(resetButton);

    body.appendChild(finalResult);
    if (playerScore === 5) {
      finalResult.textContent = "You won the game!";
    } else {
      finalResult.textContent = "You lost the game!";
    }
  }
}

// Function to reset game
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  displayScore.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
  displayResult.textContent = "";
  finalResult.textContent = "";
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
  resetButton.remove();
}
