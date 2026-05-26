let resultDisplay = document.getElementById('result');

function appendNumber(num) {
    if (resultDisplay.value === '0') {
        resultDisplay.value = num;
    } else {
        resultDisplay.value += num;
    }
}

function appendOperator(op) {
    if (resultDisplay.value === '') return;
    
    // Prevent multiple consecutive operators
    const lastChar = resultDisplay.value[resultDisplay.value.length - 1];
    if (['+', '-', '*', '/'].includes(lastChar)) {
        return;
    }
    
    resultDisplay.value += op;
}

function clearDisplay() {
    resultDisplay.value = '0';
}

function deleteLast() {
    if (resultDisplay.value.length > 1) {
        resultDisplay.value = resultDisplay.value.slice(0, -1);
    } else {
        resultDisplay.value = '0';
    }
}

function calculate() {
    try {
        const result = eval(resultDisplay.value);
        resultDisplay.value = result;
    } catch (error) {
        resultDisplay.value = 'Error';
        setTimeout(() => {
            resultDisplay.value = '0';
        }, 1500);
    }
}

// Optional: Add keyboard support
document.addEventListener('keydown', (e) => {
    if (e.key >= '0' && e.key <= '9') appendNumber(e.key);
    if (e.key === '.') appendOperator('.');
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') appendOperator(e.key);
    if (e.key === 'Enter' || e.key === '=') calculate();
    if (e.key === 'Backspace') deleteLast();
    if (e.key === 'Escape') clearDisplay();
});