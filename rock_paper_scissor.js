let score = JSON.parse(localStorage.getItem('score')) || {
  win: 0,
  lose: 0,
  tie: 0
};


/* if (!score) {
  score = {
    win: 0,
    lose: 0,
    tie: 0
    };
    } */
  
updateScoreElement();

function updateScoreElement() {
  const scoreElement = document.querySelector('.js-score');
  scoreElement.innerHTML = `Win: ${score.win}, Losses ${score.lose}, Tie: ${score.tie}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';
  
  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'Rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'Paper';
  } else {
    computerMove = 'Scissor';
  }
  return computerMove;
}


function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';

  if (playerMove === 'Rock') {
    if (computerMove === 'Rock') {
      result = 'Tie';
    } else if (computerMove === 'Paper') {
      result = 'You Lose';
    } else {
      result = 'You Win';
    }
  } else if (playerMove === 'Paper') {
    if (computerMove === 'Rock') {
      result = 'You Win'; 
    } else if (computerMove === 'Paper') {
      result = 'Tie'
    } else {
      result = 'You Lose'
    }
  } else if (playerMove === 'Scissor') {
    if (computerMove === 'Rock') {
      result = 'You Lose';
    } else if (computerMove === 'Paper') {
      result = 'You Win'
    } else {
      result = 'Tie'
    }
  }

  if (result === 'You Win') {
    score.win++;  
  } else if (result === 'You Lose') {
    score.lose++;
  } else {
    score.tie++;
  }

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `You <img src="images/${playerMove}-emoji.png" alt="" class="move-icon"> <img src="images/${computerMove}-emoji.png" alt="" class="move-icon"> Computer`;
  
  localStorage.setItem('score', JSON.stringify(score));
}