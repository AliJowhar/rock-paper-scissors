const getComputerChoice = () => {
  const randomGuess = Math.floor(Math.random() * 3) + 1;
  if (randomGuess === 1) return console.log("rock");
  if (randomGuess === 2) return console.log("paper");
  if (randomGuess === 3) return console.log("sciors");
};

const getPlayerChoice = () => {
  const choice = prompt("Rock,Paper,Scissors");
  return choice;
};

le;
