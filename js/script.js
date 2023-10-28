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

//bien luu cho dau vao va phep tinh

 let number1;
 let number2;
 let operator;

// function nhan gia tri dau vao va phep tinh

 function operate(number1, number2, operator){
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