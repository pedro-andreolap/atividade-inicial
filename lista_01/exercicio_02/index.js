// script.js
let contador = 0;
const contadorElemento = document.getElementById('contador');
const botao = document.getElementById('botao');

botao.addEventListener('click', function() {
    contador++;
    contadorElemento.innerText = contador;
});