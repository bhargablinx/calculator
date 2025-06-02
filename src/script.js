const screen = document.querySelector(".current-screen");
const historyScreen = document.querySelector(".history");
let numHolder = 0;
let num1 = 0;
let num2 = 0;
let operator = "";
let opSymbol = "";
let result = 0;

// CAPTURING NUMBERS PRESSED
document.querySelectorAll(".num").forEach((item) => {
    item.addEventListener("click", (e) => {
        const val = e.target.textContent.trim();
        if (screen.textContent === "0") {
            screen.textContent = val;
        } else {
            screen.textContent += val;
        }
        numHolder = Number(screen.textContent);
    });
});

// CAPTURING DOT
document.querySelector(".decimal-point").addEventListener("click", (e) => {
    console.log(e.target.textContent.trim());
});

// CAPTURING EQUAL
document.querySelector(".equal-btn").addEventListener("click", (e) => {
    if (operator !== "" || num1 !== 0) {
        num2 = numHolder;
    }
    console.log(`${num1} ${operator} ${num2} = ${calculate()}`);
    screen.textContent = result;
    saveHistory();
});

// CAPTURING CLEAR
document.querySelector(".clear-btn").addEventListener("click", (e) => {
    clearScreen();
    num1 = 0;
    num2 = 0;
    operator = "";
});

// CAPTURING PERCENTAGE
document.querySelector(".percentage-btn").addEventListener("click", (e) => {
    console.log(e.target.textContent.trim());
});

// CAPTURING DELETE
document.querySelector(".delete-btn").addEventListener("click", (e) => {
    console.log("delete from screen");
});

// CAPTURING OPERATION
document.querySelectorAll(".operation-btn").forEach((item) => {
    item.addEventListener("click", (e) => {
        if (result !== 0) {
            num1 = result;
            num2 = 0;
            numHolder = 0;
        } else {
            num1 = numHolder;
        }
        operator = e.target.value;
        opSymbol = e.target.textContent.trim();
        clearScreen();
        // saveHistory();
    });
});

function clearScreen() {
    screen.textContent = "0";
}

function saveHistory() {
    historyScreen.textContent = `${num1} ${opSymbol} ${num2}`;
}

function calculate() {
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
    }
    result = parseFloat(result.toFixed(5));
    return result;
}
