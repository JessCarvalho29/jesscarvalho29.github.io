function printOutput (output) {
  document.getElementById("result").innerText = "Result: " + output;
}

function validateInput(num) {
  if (num === "" || num === null || isNaN(num)) {
    alert("Enter a valid number");
    return false;
  }
  return true;
}

function sum() {
  var num1 = parseFloat(document.getElementById("input1").value) || 0;
  var num2 = parseFloat(document.getElementById("input2").value) || 0;
  var result = num1 + num2;
  printOutput (result); 
}

function subtract() {
  var num1 = parseFloat(document.getElementById("input1").value) || 0;
  var num2 = parseFloat(document.getElementById("input2").value) || 0;
  var result = num1 - num2;
  printOutput (result);
}
  
function multiply() {
  var num1 = parseFloat(document.getElementById("input1").value) || 0;
  var num2 = parseFloat(document.getElementById("input2").value) || 0;
  var result = num1 * num2;
  printOutput (result);
}
  
function division() {
  var num1 = parseFloat(document.getElementById("input1").value) || 0;
  var num2 = parseFloat(document.getElementById("input2").value) || 0;
  if (num2 === 0) {
    alert ("Cannot divide by zero");
    return;
  }
  var result = num1/num2;
  printOutput(result);

}