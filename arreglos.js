let edadesIzquierda = [];
let edadesDerecha = [];

const txtEdad = document.getElementById("edad");
const btnAgregar = document.querySelector(".formulario button");
const tablaIzquierda = document.getElementById("tablaIzquierda");
const tablaDerecha = document.getElementById("tablaDerecha");

btnAgregar.addEventListener("click", agregarEdad);

function agregarEdad() {
    let edad = parseInt(txtEdad.value);

    if (isNaN(edad) || edad <= 0) {
        alert("Ingrese una edad válida.");
        return;
    }

    edadesIzquierda.push(edad);
    txtEdad.value = "";

    dibujarTablas();
}

function dibujarTablas() {
    tablaIzquierda.innerHTML = "";
    tablaDerecha.innerHTML = "";

    for (let i = 0; i < edadesIzquierda.length; i++) {
        tablaIzquierda.innerHTML += `
            <tr>
                <td>${edadesIzquierda[i]}</td>
                <td>
                    <button class="btn-eliminar" onclick="eliminarIzquierda(${i})">Eliminar</button>
                </td>
                <td>
                    <button class="btn-mover" onclick="moverDerecha(${i})">➜</button>
                </td>
            </tr>
        `;
    }

    for (let i = 0; i < edadesDerecha.length; i++) {
        tablaDerecha.innerHTML += `
            <tr>
                <td>
                    <button class="btn-mover" onclick="moverIzquierda(${i})">⬅</button>
                </td>
                <td>${edadesDerecha[i]}</td>
                <td>
                    <button class="btn-eliminar" onclick="eliminarDerecha(${i})">Eliminar</button>
                </td>
            </tr>
        `;
    }
}

dibujarTablas();