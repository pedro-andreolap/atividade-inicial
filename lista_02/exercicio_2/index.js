const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
if (name === '') {
            alert('Por favor, preencha o campo Nome.');
            return;
        }
        if (email === '') {
            alert('Por favor, preencha o campo E-mail.');
            return;
        }
    console.log({
        "nome": nome,
        "email": email
    })
})
   
