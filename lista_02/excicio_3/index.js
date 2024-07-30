const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value

   
    
    document.getElementById('nome3').innerText=nome
    document.getElementById('gmail').innerText=email
})