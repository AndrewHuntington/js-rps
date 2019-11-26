function computerPlay() {
  // this should give a random int from 0 - 2
  // 0 = rock 1 = paper 2 = scissors
  const randomNumber = Math.floor(Math.random() * 3);
  let computerChoice;
  if (randomNumber === 0 )  {
    computerChoice = "rock";
  } else if (randomNumber === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  let ps = playerSelection.toLowerCase();
  let cs = computerSelection;

  switch (true) {
    case ps === "rock" && cs === "rock":
    case ps === "paper" && cs === "paper":
    case ps === "scissors" && cs === "scissors":
      console.log(`It's a tie! ${ps} vs. ${cs}!`);
      return 0;
      break;
    case ps === "rock" && cs === "paper":
    case ps === "paper" && cs === "scissors":
    case ps === "scissors" && cs === "rock":
      console.log(`You lose! ${cs} beats ${ps}!`);
      return 1;
      break;
    case ps === "rock" && cs === "scissors":
    case ps === "paper" && cs === "rock":
    case ps === "scissors" && cs === "paper":
      console.log(`You win! ${ps} beats ${cs}!`);
      return 2;
      break;
    default:
      return "Oh no! Something went wrong!";
  }
}

function game() {
  let win = 0;
  let lose = 0;
  let tie = 0;

  for (var i = 0; i < 5; i++) {
    const playerSelection = prompt("Enter your choice:");
    const computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);

    if (result === 0) {
      tie++;
    } else if (result === 1) {
      lose++;
    } else {
      win++;
    }
  }
  return `Final tally! Wins: ${win} Loses: ${lose} Draws: ${tie}`;
}

console.log(game());
