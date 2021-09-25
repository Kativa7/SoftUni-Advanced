function subtract() {
 let firstNum = document.getElementById('firstNumber');
 let secondNum = document.getElementById('secondNumber');
 let resultDiv = document.getElementById('result');

 resultDiv.innerHTML = Number(firstNum.value) - Number(secondNum.value);
}