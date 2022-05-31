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
        setDisplay();
    });

});

operators.forEach(button => {
    button.addEventListener('click', () => {
        storedOperator = button.textContent;
        
        if (firstNum == ''){
            firstNum += displayNum;
        }
        else {
            secondNum += displayNum;
            firstNum = Number(firstNum);
            secondNum = Number(secondNum);
            console.log(operate(storedOperator, firstNum, secondNum));
        }


        displayNum = '';
        
    });
});

function setDisplay() {
    display.textContent = displayNum;
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
    firstNum = num1 + num2;
    return num1 + num2;
}

function subtract(num1, num2) {
    firstNum = num1 - num2;
    return num1 - num2;
}

function multiply(num1, num2) {
    firstNum = num1 * num2;
    return num1 * num2;
}

function divide (num1, num2) {
    firstNum = num1 / num2;
    return num1 / num2;
}