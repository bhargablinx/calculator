let firstOperand = null;
let secondOperand = null;
let operator = null;
let result = null;
const MAX_DIGITS = 10;

const numbers = document.querySelectorAll(".num");
const operation = document.querySelectorAll(".cal");
const ac = document.querySelector(".ac");
const equal = document.querySelector(".equal");
const  screen = document.querySelector(".screen");

function addToScreen(currentDisplay, digit) {
    if (currentDisplay.length < MAX_DIGITS) {
        screen.textContent = `${currentDisplay}${digit}`;
    } else
        screen.textContent = `${currentDisplay}`;
}

let currentDisplay = () => {
    return screen.textContent;
};

numbers.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (firstOperand == null) {
            firstOperand = parseInt(btn.textContent);
            screen.textContent = firstOperand;
        } else if (operator == null) {
            secondOperand = parseInt(btn.textContent);
            addToScreen(currentDisplay(), secondOperand);
        } else {
            firstOperand = parseInt(screen.textContent);
            secondOperand = parseInt(btn.textContent);
            screen.textContent = secondOperand;
        }
    });
});

operation.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (operator == null) {
            operator = btn.textContent;
        }
    });
});

ac.addEventListener('click', () => {
    firstOperand = null;
    secondOperand = null;
    operator = null;
    screen.textContent = "0";
})

equal.addEventListener('click', () => {
    calculate(firstOperand, secondOperand, operator);
});

function calculate(firstOperand, secondOperand, operator) {
    switch(operator) {
        case '+':
            result = firstOperand + secondOperand;
            screen.textContent = result;
            break;
        case '-':
            result = firstOperand - secondOperand;
            screen.textContent = result;
            break;
        case '*':
            result = firstOperand * secondOperand;
            screen.textContent = result;
            break;
        case '/':
            result = firstOperand / secondOperand;
            screen.textContent = result;
            break;
    }
}