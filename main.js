const getComputerChoice = () => {
  const randomGuess = Math.floor(Math.random() * 3) + 1;
  console.log(randomGuess);
  if (randomGuess === 1) return "rock";
  if (randomGuess === 2) return "paper";
  if (randomGuess === 3) return "scissors";
};

const getPlayerChoice = () => {
  const choice = prompt("Rock,Paper,Scissors").toLocaleLowerCase();
  // const choice = "rock";
  return choice;
};

const gameRound = function (player, computer) {
  if (player == computer) {
    return console.log("Tie");
  } else if (
    (player == "rock" && computer == "paper") ||
    (player == "scissors" && computer == "rock") ||
    (player == "paper" && computer == "scissors")
  ) {
    return console.log(`YOU LOSE... ${computer} beats ${player}`);
  } else if (
    (player == "rock" && computer == "scissors") ||
    (player == "paper" && computer == "rock") ||
    (player == "scissors" && computer == "paper")
  ) {
    return console.log(`YOU WIN !!! ${player} beats ${computer}`);
  } else {
    return console.log("Not a Valid entry");
  }
};

gameRound(getPlayerChoice(), getComputerChoice());
