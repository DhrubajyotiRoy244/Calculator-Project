const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value;

        // Handle A%B → (A/100)*B
        expression = expression.replace(
            /(\d+)%(\d+)/g,
            (_, a, b) => `(${a}/100)*${b}`
        );

        // Handle remaining % (like 50%)
        expression = expression.replace(/%/g, "/100");

        display.value = eval(expression);
    } catch {
        display.value = "Error";
    }
}