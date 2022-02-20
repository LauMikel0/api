const formularioDatos = document.querySelector('#formularioDatos');
const titulo = document.querySelector('#titulo');
const email = document.querySelector('#email');
const programa = document.querySelector('#programa');


formularioDatos.addEventListener('submit', e => {
    e.preventDefault();

    if (guardarId) {
        editarDato(guardarId, titulo.value, email.value, programa.value);
    } else { 
        guardarDatos(titulo.value, email.value, programa.value);
    };

    titulo.value = "";
    email.value = "";
    programa.value = "";

    titulo.focus();
});