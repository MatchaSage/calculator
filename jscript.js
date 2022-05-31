let buttons = document.querySelectorAll('.button');
let display = document.querySelector('.display');
let displayArray = [];
let numArray = [];
let operatorVariable = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        
        //Checks if button text contains a number and if its not we know its an operator.
        if (isNaN(button.textContent) === false) {
            let rawNum = Number(button.textContent);
            numArray.push(rawNum);
            displayArray.push(rawNum);
            setDisplay(); 
            
        }
        
        //Checking for every operator except for clear
        else if (isNaN(button.textContent) === true && button.textContent != 'C') {
             operatorVariable = button.textContent;
         }
        
         else {
             clearDisplay();
         }
         
    });
});

function setDisplay() {
    joinedArray = displayArray.join('');
    display.textContent = joinedArray;
}

function clearDisplay() {
    while (displayArray.length > 0) {
        displayArray.pop();
    }
    
    display.textContent = '0';
}