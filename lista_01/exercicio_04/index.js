// script.js
document.getElementById('verificarIdade').addEventListener('click', function() {
    // Obter o valor da idade do input
    let idade = document.getElementById('idade').value;

    // Verificar se a idade é maior ou igual a 18
    if (idade >= 18) {
        document.getElementById('mensagemIdade').textContent = 'Você é maior de 18 anos.';
    } else {
        document.getElementById('mensagemIdade').textContent = 'Você é menor de 18 anos.';
    }
});
