let calculation = localStorage.getItem('calculator') || '';

showUpdate();

function updateCalculation(value) {
  calculation += value
  showUpdate()
  localStorage.setItem('calculator', calculation);
}

function showUpdate() {
  document.querySelector('.js-update-calculation').innerHTML = calculation;
}



// do not let repeat the symbols
// verify the last value and the pressed value, if it is symbol, change.