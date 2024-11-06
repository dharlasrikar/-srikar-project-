let currentInput = "";
let currentOperation = null;
let previousInput = "";

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function setOperation(operator) {
    if (currentInput === "") return; // Don't allow operation if no number is entered
    if (previousInput !== "") {
        calculate(); // Perform the previous calculation before setting the new operation
    }
    currentOperation = operator;
    previousInput = currentInput;
    currentInput = "";
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    
    if (isNaN(prev) || isNaN(current)) return;

    switch (currentOperation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    currentOperation = null;
    previousInput = "";
    updateDisplay();
}

function clearDisplay() {
    currentInput = "";
    previousInput = "";
    currentOperation = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}

