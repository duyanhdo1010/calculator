// cac ham tinh toan

function add(number1, number2){
    return number1 + number2;
} 

function subtract(number1, number2){
    return number1 - number2;
}


function multiply(number1, number2){
    return number1 * number2;
}


function divide(number1, number2){
    return number1 / number2;
}

var operator = ["+", "-", "*", "/"]

// function nhan gia tri dau vao va phep tinh

 function operate(number1, operator, number2){
    if (operator == "+"){
        return add(number1, number2)
    } else if (operator == "-"){
        return subtract(number1, number2)
    } else if (operator == "*"){
        return multiply(number1, number2)
    } else if (operator == "/"){ 
        return divide(number1, number2)
    }
 }

//  function update current calculation khi bam cac nut
const buttons = document.querySelectorAll('button');

const currentCalculationDisplay = document.querySelector('.current-calculation');
const currentResultDisplay = document.querySelector('.current-result');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', updateCurrentCalculation);
}

var operator = ["+", "-", "*", "/"]
var displayValue = "";
var resultValue = "";

function updateCurrentCalculation(){
    let lastDisplayValueOfOperator = displayValue.slice(-2,-1);
    let lastDisplayValue = displayValue.slice(-1);

    if (displayValue == "" && operator.includes(this.value)){
        return
    } else if (this.textContent == "AC"){
        displayValue = "";
        resultValue = "";
        currentCalculationDisplay.textContent = "";
        currentResultDisplay.textContent = "";
    } else if (this.textContent == "DEL"){
        displayValue = displayValue.slice(0, -1);
        currentCalculationDisplay.textContent = displayValue;
    } else if (operator.includes(lastDisplayValueOfOperator) && operator.includes(this.value)){
        return
    } else if (this.value == ".") {
        if (lastDisplayValue.includes(".") || operator.includes(lastDisplayValue)){
            return
        } else {
            displayValue += this.value;
            currentCalculationDisplay.textContent = displayValue;
        }
    } else if (operator.includes(this.textContent)){
        if (displayValue.split(" ").length == 3){
            Calculate();
            displayValue += " " + this.textContent + " ";
            currentCalculationDisplay.textContent = displayValue;
        } else {
            displayValue += " " + this.textContent + " ";
            currentCalculationDisplay.textContent = displayValue;
        }
    } else if (lastDisplayValue == "." && operator.includes(this.value)){
        return
    } else if (this.textContent == "="){
        if (!operator.includes(lastDisplayValueOfOperator)){
        Calculate();
        }
        else {
            return;
        }
    }
    else {
        displayValue += this.value;
        currentCalculationDisplay.textContent = displayValue;
    }
}

// function tinh ket qua

function Calculate(){
    let number1 = parseFloat(displayValue.split(" ")[0]);
    let operator = displayValue.split(" ")[1];
    let number2 = parseFloat(displayValue.split(" ")[2]);
    let result = operate(number1, operator, number2);
    resultValue = result.toString();
    currentResultDisplay.textContent = resultValue;
    displayValue = resultValue;
    currentCalculationDisplay.textContent = displayValue;
}