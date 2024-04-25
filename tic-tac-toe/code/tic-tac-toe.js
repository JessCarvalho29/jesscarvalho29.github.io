const boardGame = new Array(9).fill(null);

let characterControl = true;
let playControl = true;


function handleClick(button, arrayIndex){
  if(playControl){
    const result = character();
    boardGame[arrayIndex] = result;
    button.innerHTML = result;
    validateGame();
    nextPlayer(result);
    document.querySelector('.js-next-player')
      .innerHTML = `Next player: ${next}`;
  }
}


document.querySelector('.js-reset-game')
  .addEventListener('click', () => {
    resetGame();
    playControl = true;
  });

  document.querySelector('.js-next-player')
  .innerHTML = `Next player: X`;

function character() {
  if (characterControl === true) {
    characterControl = false;
    return 'X';
  } else if (characterControl === false) {
    characterControl = true;
    return 'O';
  }
}

let next = 'X';

function nextPlayer(result){
  if(result === 'X'){
    next = 'O';
  } else {
    next = 'X';
  }
}

const winnerLines = [
  [0, 1, 2],
  [3, 4, 5], 
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function validateGame() {
  const pElement = document.querySelector('.js-result');
  let endGame = false;
  for(let i = 0; i < winnerLines.length; i++){
    const [a, b, c] = winnerLines[i];
    if(boardGame[a] && boardGame[a] === boardGame[b] && boardGame[a] === boardGame[c]){
    playControl = false;
    pElement.innerHTML = `Winner is ${boardGame[a]}`;
    endGame = true;
    }
  }

  if(endGame === false && boardGame.every(x => x !== null)){
    pElement.innerHTML = `No winner`;
  }
  
}

function resetGame() {
  const pElement = document.querySelector('.js-result');
  pElement.innerHTML = '';
  next = 'X'
  for(let i = 0; i < boardGame.length; i++){
    document.getElementById(`${i}`)
      .innerHTML = '';
    boardGame[i] = null;
  }  
}

// does not let to play after endGame
// does not let to press a button again

