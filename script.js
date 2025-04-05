'use strict';

const generateRandomNumber = () => Math.trunc(Math.random() * 20) + 1;

const displayScrore = () => {
  document.querySelector('.score').textContent = score;
};
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
  score--;
};

const gameOver = () => {
  document.querySelector('.message').textContent = 'You lost the game.';
  score = 0;
  document.querySelector('.check').disabled = true;
  document.querySelector('.check').style.cursor = 'not-allowed';
};

const displayHighScore = () => {
  highScore = score;
  document.querySelector('.highscore').textContent = highScore;
};

const updateBGandWidth = (width, backgroundColor) => {
  document.querySelector('body').style.backgroundColor = backgroundColor;
  document.querySelector('.number').style.width = width;
};

const updateMessageandDisableButton = (
  message,
  number,
  buttonStatus,
  cursorStatus
) => {
  document.querySelector('.message').textContent = message;
  document.querySelector('.number').textContent = number;
  document.querySelector('.check').disabled = buttonStatus;
  document.querySelector('.check').style.cursor = cursorStatus;
};

//Random Number
let randomNumber = generateRandomNumber();
console.log(randomNumber);

//Initial Score and Highscore
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  //No input
  if (!guess) {
    document.querySelector('.message').textContent =
      '❗Please enter a Number between 1 and 20.';
  }
  //Wins
  else if (guess === randomNumber) {
    updateMessageandDisableButton(
      '🎉 Correct Number.',
      randomNumber,
      true,
      'not-allowed'
    );

    updateBGandWidth('30rem', '#60b347');

    if (score > highScore) {
      displayHighScore();
    }
  }
  //High
  else if (guess > randomNumber) {
    if (score > 1) {
      displayMessage('🔺 Too High.');
    } else {
      gameOver();
    }
    displayScrore();
  }
  //Low
  else if (guess < randomNumber) {
    if (score > 1) {
      displayMessage('🔻 Too Low.');
    } else {
      gameOver();
    }
    displayScrore();
  }
  document.querySelector('.guess').value = '';
});

//Reset the game

document.querySelector('.again').addEventListener('click', () => {
  score = 20;

  updateMessageandDisableButton('Start guessing...', '?', false, 'pointer');

  updateBGandWidth('15rem', '#222');

  document.querySelector('.guess').value = '';

  randomNumber = generateRandomNumber();

  displayScrore();

  console.log(randomNumber);
});
