function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function modulus(a, b) {
    return a % b;
}

let a = null, b = null;
let operator = null;

function operate(operator, a, b) {
    if (operator == '/' && b === 0) {
        setDisplayText("Error");
        return "Error";
    }
    let result;
    if (operator == '+') {
        result = add(a, b);
    } else if (operator == '-') {
        result = subtract(a, b);
    } else if (operator == '*') {
        result = multiply(a, b);
    } else if (operator == '/') {
        result = divide(a, b);
    } else if (operator == '%') {
        result = modulus(a, b);
    }
    setDisplayText(result);
    return result;
}


// attach the buttons to event listeners
const display = document.querySelector(".display");
const ac = document.querySelector("#ac");
const plusminus = document.querySelector("#plusminus");
const modulusButton = document.querySelector("#modulus");
const divideButton = document.querySelector("#divide");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const multiplyButton = document.querySelector("#multiply");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const plusButton = document.querySelector("#plus");
const minusButton = document.querySelector("#minus");
const zero = document.querySelector("#zero");
const dot = document.querySelector("#dot");
const equalsButton = document.querySelector("#equals");

let displayText;

function setDisplayText(text) {
    display.textContent = text;
}

function getDisplayText() {
    displayText = display.textContent;
    return displayText;
}

ac.addEventListener("click", (e) => {
    console.log(e.target.id);
    setDisplayText("");
    a = null;
    b = null;
    operator = null;
});

plusminus.addEventListener("click", (e) => {
    console.log(e.target.id);
    let currentText = getDisplayText();
    let number = parseFloat(currentText);
    if (!isNaN(number)) {
        number = -number;
        setDisplayText(number.toString());
    }
});

one.addEventListener("click", (e) => {
    console.log(e.target.id);
    setDisplayText(getDisplayText() + "1");
});

two.addEventListener("click", (e) => {
    console.log(e.target.id);
    setDisplayText(getDisplayText() + "2");
});

three.addEventListener("click", (e) => {
    console.log(e.target.id);
    setDisplayText(getDisplayText() + "3");
});

four.addEventListener("click", (e) => {
    console.log(e.target.id);
    setDisplayText(getDisplayText() + "4");
});

five.addEventListener("click", (e) => {
    console.log(e.target.id);
    setDisplayText(getDisplayText() + "5");
});

six.addEventListener("click", (e) => {
    console.log(e.target.id);
    setDisplayText(getDisplayText() + "6");
});

seven.addEventListener("click", (e) => {
    console.log(e.target.id);
    setDisplayText(getDisplayText() + "7");
});

eight.addEventListener("click", (e) => {
    console.log(e.target.id);
    setDisplayText(getDisplayText() + "8");
});

nine.addEventListener("click", (e) => {
    console.log(e.target.id);
    setDisplayText(getDisplayText() + "9");
});

zero.addEventListener("click", (e) => {
    console.log(e.target.id);
    setDisplayText(getDisplayText() + "0");
});

dot.addEventListener("click", (e) => {
    console.log(e.target.id);
    if (!getDisplayText().includes(".")) {
        setDisplayText(getDisplayText() + ".");
    }
});


function handleOperatorClick(op) {
    if (operator !== null && b === null) {
        b = Number.parseFloat(getDisplayText());
        operate(operator, a, b);
        a = Number.parseFloat(getDisplayText());
        b = null;
    } else {
        a = Number.parseFloat(getDisplayText());
    }
    operator = op;
    setDisplayText("");
}


plusButton.addEventListener("click", (e) => {
    console.log(e.target.id);
    handleOperatorClick("+");
});

minusButton.addEventListener("click", (e) => {
    console.log(e.target.id);
    handleOperatorClick("-");
});

multiplyButton.addEventListener("click", (e) => {
    console.log(e.target.id);
    handleOperatorClick("*");
});

divideButton.addEventListener("click", (e) => {
    console.log(e.target.id);
    handleOperatorClick("/");
});

modulusButton.addEventListener("click", (e) => {
    console.log(e.target.id);
    handleOperatorClick("%");
});

equalsButton.addEventListener("click", (e) => {
    console.log(e.target.id);
    if (operator !== null && b === null) {
        b = Number.parseFloat(getDisplayText());
        operate(operator, a, b);
        a = Number.parseFloat(getDisplayText());
        b = null;
        operator = null;
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "1") {
        one.click();
    } else if (e.key === "2") {
        two.click();
    } else if (e.key === "3") {
        three.click();
    } else if (e.key === "4") {
        four.click();
    } else if (e.key === "5") {
        five.click();
    } else if (e.key === "6") {
        six.click();
    } else if (e.key === "7") {
        seven.click();
    } else if (e.key === "8") {
        eight.click();
    } else if (e.key === "9") {
        nine.click();
    } else if (e.key === "0") {
        zero.click();
    } else if (e.key === '.') {
        dot.click();
    } else if (e.key === '+') {
        plusButton.click();
    } else if (e.key === '-') {
        minusButton.click();
    } else if (e.key === '*') {
        multiplyButton.click();
    } else if (e.key === '/') {
        divideButton.click();
    } else if (e.key === '%') {
        modulusButton.click();
    } else if (e.key === 'Enter') {
        equalsButton.click();
    } else if (e.key === 'Escape') {
        ac.click();
    }
});
