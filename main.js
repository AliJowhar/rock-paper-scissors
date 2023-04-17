const rock = document.getElementById("one");
const paper = document.getElementById("two");
const scissors = document.getElementById("three");
const whoWon = document.querySelector(".currentWin");
const score = document.querySelector(".gameScore");

let playerScore = 0;
let computerScore = 0;

const displayScore = function () {
  score.textContent = `Player: ${playerScore}
  Computer: ${computerScore}`;
};

const getComputerChoice = () => {
  const randomGuess = Math.floor(Math.random() * 3) + 1;

  if (randomGuess === 1) return "rock";
  if (randomGuess === 2) return "paper";
  if (randomGuess === 3) return "scissors";
};

const playRound = function (player, computer) {
  if (player == computer) {
    playerScore++;
    computerScore++;
    displayScore();
    whoWon.textContent = `
    TIE: 
    PLAYER Choice: ${player} 
    COMPUTER Choice: ${computer} `;
  } else if (
    (player == "rock" && computer == "paper") ||
    (player == "scissors" && computer == "rock") ||
    (player == "paper" && computer == "scissors")
  ) {
    computerScore++;
    displayScore();
    whoWon.textContent = `YOU LOSE: PLAYER Choice: ${player} 
    COMPUTER Choice: ${computer} `;
  } else if (
    (player == "rock" && computer == "scissors") ||
    (player == "paper" && computer == "rock") ||
    (player == "scissors" && computer == "paper")
  ) {
    playerScore++;
    displayScore();

    whoWon.textContent = `YOU WIN !!!
    PLAYER Choice: ${player} 
    Computer Choice: ${computer} `;
  } else {
    displayScore();

    return "Not a Valid entry";
  }
};

rock.addEventListener("click", (e) => {
  e = "rock";

  if (playerScore < 5 && computerScore < 5) {
    playRound(e, getComputerChoice());
  } else if (playerScore == 5) {
    whoWon.textContent = `PLAYER WINS`;
  } else if (computerScore == 5) {
    whoWon.textContent = `COMPUTER WINS`;
  }
});

paper.addEventListener("click", (e) => {
  e = "paper";
  if (playerScore < 5 && computerScore < 5) {
    playRound(e, getComputerChoice());
  } else if (playerScore == 5) {
    whoWon.textContent = `PLAYER WINS`;
  } else if (computerScore == 5) {
    whoWon.textContent = `COMPUTER WINS`;
  }
});

scissors.addEventListener("click", (e) => {
  e = "scissors";
  if (playerScore < 5 && computerScore < 5) {
    playRound(e, getComputerChoice());
  } else if (playerScore == 5) {
    whoWon.textContent = `PLAYER WINS`;
  } else if (computerScore == 5) {
    whoWon.textContent = `COMPUTER WINS`;
  }
});
