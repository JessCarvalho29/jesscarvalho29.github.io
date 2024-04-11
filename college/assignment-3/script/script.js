let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };
  
  //display the score on the page
  updateScoreElement();
  
  function pickComputerMove(){
  const randomNumber = Math.random();
  let computerMove = '';
  if (randomNumber >=0 && randomNumber <1/3) {
    computerMove = 'rock';
  } else if (randomNumber >=1/3 && randomNumber <1/2) {
    computerMove = 'paper';
  } else {
    computerMove = 'scissors';
  }
  return computerMove;
  }
  
  function updateScoreElement(){
  document.querySelector('.js-score')
   .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }
  
  function playGame(playerMove){
  const computerMove = pickComputerMove();
  let result;
  if(playerMove === 'paper'){
    if (computerMove === 'paper'){
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose.'
    } else if (computerMove === 'rock'){
      result = 'You win.';
    }
  } else if(playerMove === 'scissors'){
    if (computerMove === 'scissors'){
      result = 'Tie.';
    } else if (computerMove === 'rock') {
      result = 'You lose.'
    } else if (computerMove === 'paper'){
      result = 'You win.';
    }
  } else if(playerMove === 'rock'){
    if (computerMove === 'rock'){
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.'
    } else if (computerMove === 'scissors'){
      result = 'You win.';
    }
  }
  
  if(result === 'You win.'){
    score.wins = score.wins + 1;
  } else if(result === 'You lose.'){
    score.losses = score.losses + 1;
  } if(result === 'Tie.'){
    score.ties = score.ties + 1;
  }
  
  localStorage.setItem('score', JSON.stringify(score)); 
  
  //showing result and moves
  document.querySelector('.js-result').innerHTML = result;
  
  document.querySelector('.js-moves').innerHTML = `You 
    <img src="images/${playerMove}-emoji.png" class="move-icon">
    <img src="images/${computerMove}-emoji.png" class="move-icon">
    Computer`;
  
  //showing the score updated
  updateScoreElement();
  
  }