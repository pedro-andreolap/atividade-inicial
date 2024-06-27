// script.js
document.getElementById('calculateBtn').addEventListener('click', function() {
    // Obter os valores dos inputs
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operator = document.getElementById('operator').value;
    let result = 0;

    // Realizar o cálculo com base na operação selecionada
    switch (operator) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Cannot divide by zero";
            }
            break;
        default:
            result ="Invalid operation";
    }

    // Exibir o resultado na página
    document.getElementById('result').textContent = `Result: ${result}`;
});
