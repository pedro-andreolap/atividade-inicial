// script.js
document.getElementById('changeColorBtn').addEventListener('click', function() {
    // Função para gerar uma cor aleatória hexadecimal
    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Aplica a cor aleatória ao fundo da página
    document.body.style.backgroundColor = getRandomColor();
});
