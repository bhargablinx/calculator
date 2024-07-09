const cells = document.querySelectorAll('.cell');
let num1 = undefined;
let num2 = undefined;
let op = undefined;

function calculator() {
    cells.forEach((item) => {
        item.addEventListener('click', () => {
            // Catches the key presses and store in num1 & num2
            if (item.classList[1] === 'num') {
                if (num1 === undefined) {
                    num1 = parseInt(item.textContent);
                } else if (num2 === undefined) {
                    num2 = parseInt(item.textContent);
                }
                console.log(num1, num2);
            } else if (item.textContent === 'AC') {
                AC();
            } else if(item.classList[1] === 'operation' && num1 != undefined) {
                op = item.textContent;
            } else if(item.classList[1] === 'equal') {
                equal();
            }
            
        });
    });
}

function AC() {
    console.log('cleaned');
    num1 = undefined;
    num2 = undefined;
    op = undefined;
}

function equal() {
    switch(op) {
        case '+':
            console.log(num1 + num2);
            break;
        case '-':
            console.log(num1 - num2);
            break;
        case 'x':
            console.log(num1 * num2);
            break;
        case 'x':
            console.log(num1 / num2);
            break;
    }
}

calculator();