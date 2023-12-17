let operand1 = "";
let operand2 = "";
let opt;

function buttonHandler(btn) {
    const pressedValue = btn.innerText;
    const resultInput = document.getElementById('resultInput');

    if (isNaN(pressedValue)) {
        if (pressedValue === 'C') {
            operand1 = "";
            operand2 = "";
            resultInput.value = "";
            return;
        }
        if (pressedValue === "=") {
            const result = perform(operand1, operand2, opt);
            resultInput.value = result;
            operand1 = "";
            operand2 = "";
            opt = undefined;
        } else {
            opt = pressedValue;
        }
    } else {
        if (opt) {
            operand2 += pressedValue;
            resultInput.value = operand2;
        } else {
            operand1 += pressedValue;
            resultInput.value = operand1;
        }
    }

    alert("Button clicked!"); // Display an alert when a button is clicked
}

function perform(operand1, operand2, operator) {
    operand1 = Number(operand1);
    operand2 = Number(operand2);

    switch (operator) {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case 'X':
            return operand1 * operand2;
        case ':':
            return operand1 % operand2;
    }
}