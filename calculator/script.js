let displayValue = '0';
let operator = '';
let firstOperand = '';

function updateDisplay() {
    document.getElementById('display').innerText = displayValue.replace(/\s/g, '');
}

function appendToDisplay(value) {
    if (displayValue === '0') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    operator = '';
    firstOperand = '';
    updateDisplay();
}

function operate(op) {
    if (firstOperand === '') {
        firstOperand = displayValue;
        operator = op;
        displayValue = '0';
    } else {
        calculate();
        operator = op;
    }
}

function calculate() {
    const secondOperand = displayValue;
    switch (operator) {
        case '+':
            displayValue = String(parseFloat(firstOperand) + parseFloat(secondOperand));
            break;
        case '-':
            displayValue = String(parseFloat(firstOperand) - parseFloat(secondOperand));
            break;
        case '*':
            displayValue = String(parseFloat(firstOperand) * parseFloat(secondOperand));
            break;
        case '/':
            displayValue = String(parseFloat(firstOperand) / parseFloat(secondOperand));
            break;
    }
    firstOperand = '';
    operator = '';
    updateDisplay();
}

function backspace() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}
