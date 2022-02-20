const socket = io.connect();

const guardarDatos = (titulo, email) => {
    socket.emit('cliente:nuevoDato', {
        titulo,
        email,
    });
};

const borrarDato = (id) => {
    socket.emit("cliente:borrarDato", id);
};

const getDato = (id) => {
    socket.emit("cliente:getDato",id)
};

const editarDato = (id, titulo, email) => {
   socket.emit("cliente:editarDato", {
       id, 
       titulo,
       email,
   });
};


socket.on('server:nuevoDato', appendDato);
socket.on('server:cargarNotas', renderDato);


socket.on('server:seleccionDato', nota => {
    const titulo = document.querySelector('#titulo');
    const email = document.querySelector('#email');

    titulo.value = nota.titulo;
    email.value = nota.email;

    guardarId = nota.id;
});