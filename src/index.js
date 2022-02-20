import express from 'express';
import { Server, Server as WebSocketServer} from 'socket.io';
import http from 'http';
import {v4 as uuid} from 'uuid';

let notas = [];

const app = express();
const server = http.createServer(app);
const io = new WebSocketServer(server);

app.use(express.static(__dirname + '/public')); 

io.on('connection', (socket) => {
    console.log('Nueva conexion:', socket.id);

    socket.emit('server:cargarNotas', notas);

    socket.on("cliente:nuevoDato", (nuevoDato) => {
        const nota = { ...nuevoDato, id: uuid() };
        notas.push(nota);
        io.emit("server:nuevoDato", nota);
    });

    socket.on("cliente:borrarDato", (notaId) => {
       notas = notas.filter((nota) => nota.id !== notaId);
       io.emit("server:cargarNotas", notas);
});

socket.on("cliente:getDato", (notaId) => {
    const nota = notas.find((nota) => nota.id === notaId);
    socket.emit("server:seleccionDato", nota);
});

socket.on("cliente:editarDato", editarDato => {
    notas = notas.map((nota) => {
        if (nota.id === editarDato.id) {
            nota.titulo = editarDato.titulo;
            nota.email = editarDato.email;
            nota.programa = editarDato.programa;
        }
        return nota;
    });

    io.emit("server:editarDato", notas);
});
});
server.listen(3000);
console.log('Server on port', 3000);