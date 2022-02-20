const formularioDatos = document.querySelector('#formularioDatos');
const titulo = document.querySelector('#titulo');
const email = document.querySelector('#email');


formularioDatos.addEventListener('submit', e => {
    e.preventDefault();

    if (guardarId) {
        editarDato(guardarId, titulo.value, email.value);
    } else { 
        guardarDatos(titulo.value, email.value);
    };

    titulo.value = "";
    email.value = "";

    titulo.focus();
});