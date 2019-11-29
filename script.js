let win = 0;
let lose = 0;
let tie = 0;
let gameOver = false;

const result = document.querySelector('.result');
const matchResult = document.createElement('h1');
const winCounter = document.createElement('h2');

function computerPlay() {
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
  let ps = playerSelection;
  let cs = computerSelection;

  switch (true) {
    case ps === "rock" && cs === "rock":
    case ps === "paper" && cs === "paper":
    case ps === "scissors" && cs === "scissors":
      matchResult.textContent = `It's a tie! ${ps} vs. ${cs}!`;
      winCounter.textContent = trackScore(0);
      return;
      break;
    case ps === "rock" && cs === "paper":
    case ps === "paper" && cs === "scissors":
    case ps === "scissors" && cs === "rock":
      matchResult.textContent = `You lose! ${cs} beats ${ps}!`;
      winCounter.textContent = trackScore(1);
      return;
      break;
    case ps === "rock" && cs === "scissors":
    case ps === "paper" && cs === "rock":
    case ps === "scissors" && cs === "paper":
      matchResult.textContent = `You win! ${ps} beats ${cs}!`
      winCounter.textContent = trackScore(2);
      return;
      break;
    default:
      matchResult.textContent = "Oh no! Something went wrong!"
      return;
  }
}

function trackScore(result) {
    if (result === 0) {
      tie++;
    } else if (result === 1) {
      lose++;
    } else {
      win++;
    }

    if (win >= 5) {
      gameOver = true;
      return `WINNER! Final tally - Wins: ${win} Loses: ${lose} Draws: ${tie}`;
    } else if (lose >= 5) {
      gameOver = true;
      return `GAME OVER! Final tally - Wins: ${win} Loses: ${lose} Draws: ${tie}`;
    } else {
      return `Current Score - Wins: ${win} Loses: ${lose} Draws: ${tie}`;
    }
}

const btns = document.querySelectorAll('button');
btns.forEach(btn => btn.addEventListener('click', (e) => {
  if (gameOver) {
    return;
  } else {
    playRound(e.explicitOriginalTarget.id, computerPlay());
    result.appendChild(matchResult);
    result.appendChild(winCounter);
  }
}));
