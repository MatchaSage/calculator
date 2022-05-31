let numbers = document.querySelectorAll('.num');
let operators = document.querySelectorAll('.operator');
let display = document.querySelector('.display');
let displayNum = '';
let firstNum = '';
let secondNum = '';
let storedOperator = '';

numbers.forEach(button => {
    button.addEventListener('click', () => {
        displayNum += button.textContent;
        setDisplay(displayNum);
    });

});

operators.forEach(button => {
    button.addEventListener('click', () => {
        
        if (button.textContent == 'C') {
            displayNum = '';
            firstNum = '';
            secondNum = '';
            storedOperator = '';
            setDisplay();
        }
        
        
        if (firstNum == ''){
            firstNum += displayNum;
        }
        
        else {
            secondNum += displayNum;
            firstNum = Number(firstNum);
            secondNum = Number(secondNum);
            console.log(operate(storedOperator, firstNum, secondNum));
        }

        storedOperator = button.textContent;
        displayNum = '';
        
    });
});

function setDisplay(num = 0) {
    display.textContent = num;
}


function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
            break;
        case '-' :
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
        case '=':
            break;
    }
}

function add(num1, num2) {
    secondNum = '';
    storedOperator = '';
    firstNum = num1 + num2;
    setDisplay(firstNum);
    return num1 + num2;
}

function subtract(num1, num2) {
    secondNum = '';
    storedOperator = '';
    firstNum = num1 - num2;
    setDisplay(firstNum);
    return num1 - num2;
}

function multiply(num1, num2) {
    secondNum = '';
    storedOperator = '';
    firstNum = num1 * num2;
    setDisplay(firstNum);
    return num1 * num2;
}

function divide (num1, num2) {
    secondNum = '';
    storedOperator = '';
    firstNum = num1 / num2;
    setDisplay(firstNum);
    return num1 / num2;
}