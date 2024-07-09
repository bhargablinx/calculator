const cells = document.querySelectorAll('.cell');
const screen = document.querySelector('.screen');
let num1 = undefined;
let num2 = undefined;
// let tmp = undefined;
let op = undefined;
const MAX_DIGITS = 999999999999;

function calculator() {
    cells.forEach((item) => {
        item.addEventListener('click', () => {
            // Catches the key presses and store in num1 & num2
            if (item.classList[1] === 'num') {
                currentDigit = item.textContent;
                updateScreen(currentDigit);
            } else if (item.textContent === 'AC') {
                AC();
            } else if(item.classList[1] === 'operation' && num1 != undefined) {
                console.log('Operation clicked', item.textContent);
                if (op != undefined) {
                    num1 = parseInt(screen.textContent);
                }
                op = item.textContent;
                screen.textContent = 0;
            } else if(item.classList[1] === 'equal') {
                equal();
            }
            
        });
    });
}

function updateScreen(currentDigit) {
    let previousDigit = parseInt(screen.textContent);
    if (previousDigit >= MAX_DIGITS) {
        console.log('max limit exceeded');
        return;
    }
    if (previousDigit != '0') {
        screen.textContent = `${previousDigit}${currentDigit}`;
        if (op == undefined)
            num1 = parseInt(screen.textContent);
        else 
            num2 = parseInt(screen.textContent);
    } else {
        screen.textContent = currentDigit;
        if (op == undefined)
            num1 = parseInt(screen.textContent);
        else 
            num2 = parseInt(screen.textContent);
    }
}

function AC() {
    console.log('cleaned');
    num1 = undefined;
    num2 = undefined;
    op = undefined;
    screen.textContent = 0;
}

function equal() {
    switch(op) {
        case '+':
            console.log(num1 + num2);
            screen.textContent = num1 + num2;
            break;
        case '-':
            console.log(num1 - num2);
            screen.textContent = num1 - num2;
            break;
        case 'x':
            console.log(num1 * num2);
            screen.textContent = num1 * num2;
            break;
        case '÷':
            console.log(num1 / num2);
            screen.textContent = num1 / num2;
            break;
    }
}

calculator();