const rock = document.getElementById("one");
const paper = document.getElementById("two");
const scissors = document.getElementById("three");
const whoWon = document.querySelector(".currentWin");
const score = document.querySelector(".gameScore");

let playerScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  const randomGuess = Math.floor(Math.random() * 3) + 1;

  if (randomGuess === 1) return "rock";
  if (randomGuess === 2) return "paper";
  if (randomGuess === 3) return "scissors";
};

const displayScore = function () {
  score.textContent = `Player: ${playerScore}
  Computer: ${computerScore}`;
};

const playRound = function (player, computer) {
  if (player == computer) {
    // playerScore++;
    // computerScore++;
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
const game = function () {
  if (playerScore <= 5 && computerScore <= 5) {
    for (let i = 0; i < 5; i++) {
      playRound(getPlayerChoice(), getComputerChoice());
    }

    if (playerScore > computerScore) {
      console.log("PLAYER WINS");
    } else {
      console.log("COMPUTER WINS ");
    }
  }
};
// game();

rock.addEventListener("click", (e) => {
  e = "rock";
  playRound(e, getComputerChoice());
});

paper.addEventListener("click", (e) => {
  e = "paper";

  playRound(e, getComputerChoice());
});

scissors.addEventListener("click", (e) => {
  e = "scissors";
  playRound(e, getComputerChoice());
});
