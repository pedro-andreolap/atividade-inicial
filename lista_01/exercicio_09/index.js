// script.js
function updateClock() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0'); // obter horas no formato de dois dígitos
    let minutes = now.getMinutes().toString().padStart(2, '0'); // obter minutos no formato de dois dígitos
    let seconds = now.getSeconds().toString().padStart(2, '0'); // obter segundos no formato de dois dígitos
    let timeString = `${hours}:${minutes}:${seconds}`;

    document.getElementById('clockDisplay').textContent = timeString;
}

// Atualizar o relógio a cada segundo
setInterval(updateClock, 1000);

// Iniciar o relógio assim que a página for carregada
updateClock();
