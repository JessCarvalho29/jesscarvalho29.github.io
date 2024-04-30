let calculation = localStorage.getItem('calculator') || '';

const operatorSigns = ["-", "+", "/", ".", "*"];

let count = 0;


showUpdate();

function updateCalculation(value) {

  let lastItem = calculation[calculation.length-1];

  let lastItemIsOperatorSign = false;
  for(let i = 0; i < operatorSigns.length; i++){
    if(lastItem === operatorSigns[i]){
      lastItemIsOperatorSign = true;
    }
  }

  let isOperatorSign = false;
  for(let i = 0; i < operatorSigns.length; i++){
    if(value === operatorSigns[i]){
      isOperatorSign = true;
    }
  }
  
  // console.log(calculation.includes("."));
  // let verifyDotOperation = calculation.includes(".");
  
  // if(value === "." && verifyDotOperation === true){
  //   showUpdate();
  // } else 
  if(lastItemIsOperatorSign == true && isOperatorSign == true){
    calculation = calculation.slice(0, -1);
    calculation += value;
  } else {
    calculation += value;
  }
  
  showUpdate();
  localStorage.setItem('calculator', calculation);
  count++;
}

function showUpdate() {
  document.querySelector('.js-update-calculation').innerHTML = calculation;
}

document.addEventListener('keydown', function(event){
  if(event.key === 'Enter'){
    if(count !== 0){
      calculation = eval(calculation);
      showUpdate();
      localStorage.setItem('calculator', calculation);
    }
  } else if(event.key === 'Backspace'){
    count--;
    calculation = calculation.slice(0, -1);
    showUpdate();
  } else if(event.key === '1' || event.key === '2' || event.key === '3' || event.key === '4' || event.key === '5' || event.key === '6' || event.key === '7' || event.key === '8' || event.key === '9' || event.key === '0' || event.key === '+' || event.key === '-' || event.key === '/' || event.key === '*' || event.key === '.'){
    updateCalculation(event.key);
  } else if(event.key === '%'){
    calculation = eval(calculation/100);
    showUpdate();
    localStorage.setItem('calculator', calculation);
  }
});

// do not let repeat the symbols - Ok
// verify the last value and the pressed value, if it is symbol, change. - Ok
// do not let put not than one dot