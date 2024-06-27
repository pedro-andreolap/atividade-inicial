// script.js
document.getElementById('countBtn').addEventListener('click', function() {
    let text = document.getElementById('textInput').value.trim(); // Obter o texto do textarea e remover espaços em branco no início e no fim
    let wordCount = 0;

    if (text !== '') {
        // Dividir o texto em palavras usando expressão regular para considerar sequências de caracteres como palavras
        let words = text.match(/\b\w+\b/g);
        wordCount = words ? words.length : 0;
    }

    // Exibir o total de palavras na página
    document.getElementById('wordCount').textContent = wordCount;
});
