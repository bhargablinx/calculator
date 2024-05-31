let firstOperand = null;
let secondOperand = null;
let operator = null;

const numbers = document.querySelectorAll(".num");

numbers.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (firstOperand == null) {
            firstOperand = parseInt(btn.textContent);
        } else {
            secondOperand = parseInt(btn.textContent);
        }
    });
});

function calculate(firstOperand, secondOperand, operator) {
    switch(operator) {
        case '+':
            console.log(firstOperand + secondOperand);
            break;
        case '-':
            console.log(firstOperand - secondOperand);
            break;
        case '*':
            console.log(firstOperand * secondOperand);
            break;
        case '/':
            console.log(firstOperand / secondOperand);
            break;
    }
}

console.log(firstOperand);
console.log(secondOperand);