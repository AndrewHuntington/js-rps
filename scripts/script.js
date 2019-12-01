let win = 0;
let lose = 0;
let tie = 0;
let gameOver = false;

const userName = prompt('Welcome to Rock-Paper-Scissors!\nPlease enter your name:');
const welcomeMsg = document.createElement('h1');
const statusMsg = document.createElement('p');
const matchResult = document.createElement('p');
const winCounter = document.createElement('p');
const gameArea = document.querySelector('.game-area');
const result = document.querySelector('.result');
matchResult.classList.add('matchResult');
statusMsg.classList.add('statusMsg');
winCounter.classList.add('winCounter');
welcomeMsg.classList.add('welcomeMsg');
welcomeMsg.textContent = `Choose your action, ${userName}.`;

gameArea.insertBefore(welcomeMsg, gameArea.firstChild);

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
      matchResult.textContent = `It's a tie! ${ps.charAt(0).toUpperCase() + ps.substring(1)} and ${cs}!`;
      winCounter.textContent = trackScore(0);
      return;
      break;
    case ps === "rock" && cs === "paper":
    case ps === "paper" && cs === "scissors":
    case ps === "scissors" && cs === "rock":
      matchResult.textContent = `You lose! ${cs.charAt(0).toUpperCase() + cs.substring(1)} beats ${ps}!`;
      winCounter.textContent = trackScore(1);
      return;
      break;
    case ps === "rock" && cs === "scissors":
    case ps === "paper" && cs === "rock":
    case ps === "scissors" && cs === "paper":
      matchResult.textContent = `You win! ${ps.charAt(0).toUpperCase() + ps.substring(1)} beats ${cs}!`;
      winCounter.textContent = trackScore(2);
      return;
      break;
    default:
      matchResult.textContent = "Oh no! Something went wrong!"
      return;
  }
}

function trackScore(result) {
  let resultTxt;

  if (result === 0) {
    tie++;
  } else if (result === 1) {
    lose++;
  } else {
    win++;
  }

  if (win >= 5) {
    gameOver = true;
    welcomeMsg.textContent = 'GAME OVER!';
    statusMsg.textContent = "- Final Tally -";
    return `Wins: ${win} Loses: ${lose} Draws: ${tie}`;
  } else if (lose >= 5) {
    gameOver = true;
    welcomeMsg.textContent = 'GAME OVER!';
    statusMsg.textContent = "- Final Tally -";
    return `Wins: ${win} Loses: ${lose} Draws: ${tie}`;
  } else {
    statusMsg.textContent = "- Current Score -";
    return `Wins: ${win} Loses: ${lose} Draws: ${tie}`;
  }
}

const btns = document.querySelectorAll('button');
btns.forEach(btn => btn.addEventListener('click', (e) => {
  if (gameOver) {
    return;
  } else {
    console.log(e.explicitOriginalTarget.id);
    playRound(e.explicitOriginalTarget.id, computerPlay());
    result.appendChild(matchResult);
    result.appendChild(statusMsg);
    result.appendChild(winCounter);
  }
}));
