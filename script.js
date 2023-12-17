let displayValue = '0';
let firstOperand = null;
let operator = null;
let waitingForSecondOperand = false;

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function appendNumber(number) {
    if (waitingForSecondOperand) {
        displayValue = String(number);
        waitingForSecondOperand = false;
    } else {
        displayValue = displayValue === '0' ? String(number) : displayValue + number;
    }
    updateDisplay();
}

function appendDecimal() {
    if (waitingForSecondOperand) {
        displayValue = '0.';
        waitingForSecondOperand = false;
    } else if (!displayValue.includes('.')) {
        displayValue += '.';
    }
    updateDisplay();
}

function setOperator(newOperator) {
    if (operator !== null && !waitingForSecondOperand) {
        calculateResult();
    }
    firstOperand = parseFloat(displayValue);
    operator = newOperator;
    waitingForSecondOperand = true;
}

function calculateResult() {
    if (operator === null || waitingForSecondOperand) {
        return;
    }
    const secondOperand = parseFloat(displayValue);
    let result = 0;

    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            if (secondOperand !== 0) {
                result = firstOperand / secondOperand;
            } else {
                displayValue = 'Error';
                updateDisplay();
                return;
            }
            break;
    }

    displayValue = String(result);
    operator = null;
    waitingForSecondOperand = true;
    updateDisplay();
}

function updateDisplay() {
    const displayElement = document.getElementById('display');
    displayElement.textContent = displayValue;
}