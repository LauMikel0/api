const notasListas = document.querySelector('#notas');

let guardarId = "";

const notaUI = (nota) => {
const div = document.createElement("div");

    div.innerHTML = `
    <div class="card card-body rounded-0 animate__animated animate__fadeInUp mb-2">
       <div dforiv class="d-flex justify-content-between">
         <h1>${nota.titulo}</h1>
           <div>
               <button class="btn btn-danger eliminar" data-id="${nota.id}">Eliminar</button>
               <button class="btn btn-secondary editar" data-id="${nota.id}">Editar</button>
           </div>
       </div>
           <p>${nota.email}</p>
    </div>
    `;

    const btnEliminar = div.querySelector(".eliminar");
    const btnEditar = div.querySelector(".editar");

    btnEliminar.addEventListener("click", () => borrarDato(btnEliminar.dataset.id)); 


    btnEditar.addEventListener('click', () => {
        socket.emit("cliente:getDato", btnEditar.dataset.id);
     });

    return div;

};

const renderDato = (notas) => {
    guardarId = "";
    notasListas.innerHTML = "";
    console.log(notas);
    notas.forEach((nota) => {
        notasListas.append(notaUI(nota));
    });
};

const appendDato = nota => {
    notasListas.append(notaUI(nota));
};