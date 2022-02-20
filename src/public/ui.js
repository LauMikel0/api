const notasListas = document.querySelector('#notas');

let guardarId = "";

const notaUI = (nota) => {
const div = document.createElement("div");

    div.innerHTML = `
    <table class="container">
    <tbody>
		<tr>
			<th>${nota.titulo}</th>
            <th>${nota.email}></th>
            <th>${nota.programa}</th>
            <td button class="td eliminar" data-id="${nota.id}">Eliminar</td>
			<td button class="td editar" data-id="${nota.id}">Editar</td>
		</tr>
        </tbody>
    </table>
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