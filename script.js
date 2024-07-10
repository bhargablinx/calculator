const cells = document.querySelectorAll('.cell');
const screen = document.querySelector('.screen');
let num1 = undefined;
let num2 = undefined;
let op = undefined;
const MAX_DIGITS = 999999999999;

function calculator() {
    cells.forEach((item) => {
        item.addEventListener('click', () => {
            // Catches the key presses and store in num1 & num2
            if (item.classList.contains('num') || item.textContent === '.') {
                currentDigit = item.textContent;
                updateScreen(currentDigit);
            } else if (item.textContent === 'AC') {
                AC();
            } else if(item.classList.contains('operation') && num1 != undefined) {
                console.log('Operation clicked', item.textContent);
                if (op != undefined) {
                    num1 = parseFloat(screen.textContent);
                }
                op = item.textContent;
                screen.textContent = '0';
            } else if(item.classList.contains('equal')) {
                equal();
            }
        });
    });
}

function updateScreen(currentDigit) {
    let previousDigit = screen.textContent;
    if (parseFloat(previousDigit) >= MAX_DIGITS && currentDigit !== '.') {
        console.log('max limit exceeded');
        return;
    }
    if (previousDigit !== '0' && previousDigit !== '0.' || currentDigit === '.') {
        // Prevent multiple decimal points in a single number
        if (currentDigit === '.' && previousDigit.includes('.')) {
            return;
        }
        screen.textContent = `${previousDigit}${currentDigit}`;
        if (op == undefined) {
            num1 = parseFloat(screen.textContent);
        } else {
            num2 = parseFloat(screen.textContent);
        }
    } else {
        screen.textContent = currentDigit;
        if (op == undefined) {
            num1 = parseFloat(screen.textContent);
        } else {
            num2 = parseFloat(screen.textContent);
        }
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
            showResultInScreen(num1 + num2);
            break;
        case '-':
            console.log(num1 - num2);
            showResultInScreen(num1 - num2);
            break;
        case 'x':
            console.log(num1 * num2);
            showResultInScreen(num1 * num2);
            break;
        case '÷':
            console.log(num1 / num2);
            showResultInScreen(num1 / num2);
            break;
    }
} function showResultInScreen(result) {
    if (result < 1 && result > 0)
        screen.textContent = Number(result.toFixed(10));
    else
        screen.textContent = result;
}

calculator();