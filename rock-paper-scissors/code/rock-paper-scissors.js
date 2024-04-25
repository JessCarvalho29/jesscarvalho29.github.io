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

let intervalId = 0;

//const autoPlay = () => {};

//this sintaxe is better to this situation
function autoPlay(){
  const buttonElement = document.querySelector('.js-auto-play-button');

    if(buttonElement.innerText === 'Auto Play'){
      buttonElement.innerHTML = 'Stop Play';
      intervalId = setInterval(() => {
        const playerMove = pickComputerMove();
        playGame(playerMove)
      }, 1000);
    } else {
      buttonElement.innerHTML = 'Auto Play';
      clearInterval(intervalId);
      document.querySelector('.js-result').innerHTML = '';
      document.querySelector('.js-moves').innerHTML = '';
    }
}

document.querySelector('.js-auto-play-button')
  .addEventListener('click', () => {
    autoPlay();
  })

document.querySelector('.js-rock-button')
  .addEventListener('click', () => {
    playGame('rock');
  });

document.querySelector('.js-paper-button')
  .addEventListener('click', () => {
    playGame('paper');
  });

document.querySelector('.js-scissors-button')
  .addEventListener('click', () => {
    playGame('scissors');
  });

  document.querySelector('.js-reset-score-button')
    .addEventListener('click', () => {
      resetButton();
    });

document.body.addEventListener('keydown', (event) => {
    //console.log(event.key);
    if(event.key === 'r'){
      playGame('rock');
    } else if(event.key === 'p'){
      playGame('paper');
    } else if(event.key === 's'){
      playGame('scissors');
    } else if(event.key === 'a'){
      autoPlay();
    } else if(event.key === ' '){
      resetButton();
    }
  });

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

function resetButton(){
  const html = `
    <p>Are you sure you want to reset the score?
    <button class="js-yes-button yes-button">Yes</button>
    <button class="js-no-button no-button">No</button>
    </p>
  `;

  document.querySelector('.js-confirmation')
    .innerHTML = html;
  
  document.querySelector('.js-yes-button')
    .addEventListener('click', () => {
      score.wins = 0;
      score.losses = 0;
      score.ties = 0;
      localStorage.removeItem('score');
      updateScoreElement();
      document.querySelector('.js-result').innerHTML = '';
      document.querySelector('.js-moves').innerHTML = '';
      document.querySelector('.js-confirmation').innerHTML = '';
    })

  document.querySelector('.js-no-button')
    .addEventListener('click', () => {
      document.querySelector('.js-confirmation').innerHTML = '';
    })
}