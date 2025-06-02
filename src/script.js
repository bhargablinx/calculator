const screen = document.querySelector(".current-screen");
let numHolder = 0;
let num1 = 0;
let num2 = 0;
let result = 0;
let operator = "";

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
        console.log(numHolder, num1);
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
    console.log(`${num1} ${operator} ${num2}`);
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
        num1 = numHolder;
        operator = e.target.textContent.trim();
        clearScreen();
    });
});

function clearScreen() {
    screen.textContent = "0";
}
