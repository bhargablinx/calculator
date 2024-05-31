let firstOperand = null;
let secondOperand = null;
let operator = null;

const numbers = document.querySelectorAll(".num");
const operation = document.querySelectorAll(".cal");
const ac = document.querySelector(".ac");
const equal = document.querySelector(".equal");
const screen = document.querySelector(".screen");

numbers.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (firstOperand == null) {
            firstOperand = parseInt(btn.textContent);
            screen.textContent = firstOperand;
        } else {
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
            screen.textContent = `${firstOperand + secondOperand}`;
            console.log(firstOperand + secondOperand);
            break;
        case '-':
            screen.textContent = `${firstOperand - secondOperand}`;
            console.log(firstOperand - secondOperand);
            break;
        case '*':
            screen.textContent = `${firstOperand * secondOperand}`;
            console.log(firstOperand * secondOperand);
            break;
        case '/':
            screen.textContent = `${firstOperand / secondOperand}`;
            console.log(firstOperand / secondOperand);
            break;
    }
}

console.log(firstOperand);
console.log(secondOperand);