const socket = io.connect();

const guardarDatos = (titulo, email, programa) => {
    socket.emit('cliente:nuevoDato', {
        titulo,
        email,
        programa,
    });
};

const borrarDato = (id) => {
    socket.emit("cliente:borrarDato", id);
};

const getDato = (id) => {
    socket.emit("cliente:getDato",id)
};

const editarDato = (id, titulo, email, programa) => {
   socket.emit("cliente:editarDato", {
       id, 
       titulo,
       email,
       programa,
   });
};


socket.on('server:nuevoDato', appendDato);
socket.on('server:cargarNotas', renderDato);


socket.on('server:seleccionDato', nota => {
    const titulo = document.querySelector('#titulo');
    const email = document.querySelector('#email');
    const programa = document.querySelector('#programa');

    titulo.value = nota.titulo;
    email.value = nota.email;
    programa.value = nota.programa;

    guardarId = nota.id;
});