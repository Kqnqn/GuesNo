'use strict';

/* document.querySelector('.message').textContent = 'Correct value';

console.log(document.querySelector('.message').textContent); */

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// RESET Again dugme
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when ther is no input
  if (!guess) {
    displayMessage('👀 No number !!');
    //document.querySelector('.message').textContent = '👀 No number !!';

    // when guess is correct
  } else if (guess === number) {
    if (score > 1) {
      //document.querySelector('.message').textContent = '🎉 Correct number';
      displayMessage('🎉 Correct number');
      document.querySelector('.number').textContent = number;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else {
      //document.querySelector('.message').textContent = ' 😒 You loose';
      displayMessage(' 😒 You loose');
      document.querySelector('.score').textContent = 0;
    }
    // when number is not guess
  } else if (guess !== number) {
    /* document.querySelector('.message').textContent =
      guess > number ? '🔼 Number too high' : '🔽 Number too low'; */
    if (score > 1) {
      displayMessage(
        guess > number ? '🔼 Number too high' : '🔽 Number too low'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = ' 😒 You loose';
      displayMessage(' 😒 You loose');

      document.querySelector('.score').textContent = 0;
    }
  }
  // when number is too high
  /*  else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🔼 Number too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' 😒 You loose';
      document.querySelector('.score').textContent = 0;
    }
    // when number is too low
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🔽 Number too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' 😒 You loose';
      document.querySelector('.score').textContent = 0;
    }
  } */
});
