let intervalId = 0;
let isClicked = true;
const displaySeconds = document.querySelector('.js-seconds');
const displayMinutes = document.querySelector('.js-minutes');
const displayHours = document.querySelector('.js-hours');

displaySeconds.innerHTML = 0;
displayMinutes.innerHTML = 0;
displayHours.innerHTML = 0;

let seconds = 0;
let minutes = 0;
let hours = 0;

//Start button
document.querySelector('.js-start-button')
  .addEventListener('click', () => {
    if(isClicked === true){
      isClicked = false;
      intervalId = setInterval(() => {
        seconds++;
        displayTime();
      }, 1000);
    }
  });

//Stop button
document.querySelector('.js-stop-button')
  .addEventListener('click', () => {
    isClicked = true;
    clearInterval(intervalId);
  });

//Resert button
document.querySelector('.js-reset-button')
  .addEventListener('click', () => {
    isClicked = true;
    clearInterval(intervalId);
    seconds = 0;
    displaySeconds.innerHTML = 0;
    displayMinutes.innerHTML = 0;
    displayHours.innerHTML = 0;
  });

function displayTime() {
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes > 59) {
    minutes = 0;
    hours++;
  }

  displaySeconds.innerHTML = seconds;
  displayMinutes.innerHTML = minutes;
  displayHours.innerHTML = hours;

}