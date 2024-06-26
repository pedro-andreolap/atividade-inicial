// script.js
document.getElementById('calcularIdade').addEventListener('click', function() {
    // Obter o valor do ano de nascimento do input
    let anoNascimento = document.getElementById('anoNascimento').value;

    // Calcular a idade com base no ano atual
    let anoAtual = new Date().getFullYear();
    let idade = anoAtual - anoNascimento;

    // Exibir a idade no campo de texto
    document.getElementById('idade').textContent = idade;
});
