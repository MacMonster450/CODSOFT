const display = document.getElementById("calDisplay");
const buttons = document.querySelectorAll('.btn');
let currentInput = '';
let operator = '';
let operand1 = null;
let operand2 = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const key = button.textContent;
        if (key === "C") {
            currentInput = '';
            operator = '';
            operand1 = null;
            operand2 = null;
            display.value = '';
        } else if (key === '=') {
            if (operator && operand1 !== null) {
                operand2 = parseFloat(currentInput);
                calculate();
            }
        } else if (key === '←') {
            if (currentInput) {
                currentInput = currentInput.slice(0, -1);
                display.value = operand1 !== null ? operand1 + " " + operator + " " + currentInput : currentInput;
            }
        } else if (['+', '-', '*', '/'].includes(key)) {
            if (currentInput) {
                if (operand1 === null) {
                    operand1 = parseFloat(currentInput);
                } else if (operator) {
                    operand2 = parseFloat(currentInput);
                    calculate();
                    operand1 = parseFloat(display.value);
                }
                operator = key;
                currentInput = '';
                display.value = operand1 + " " + operator;
            }
        } else if (key === '√') {
            if (currentInput) {
                currentInput = Math.sqrt(parseFloat(currentInput)).toString();
                display.value = currentInput;
            }
        } else if (key === 'x²') {
            if (currentInput) {
                currentInput = Math.pow(parseFloat(currentInput), 2).toString();
                display.value = currentInput;
            }
        } else {
            currentInput += key;
            display.value = operand1 !== null ? operand1 + " " + operator + " " + currentInput : currentInput;
        }
    });
});

function calculate() {
    let result;
    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            result = operand1 / operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        default:
            return;
    }
    display.value = result;
    operator = '';
    currentInput = '';
    operand1 = result;
}
