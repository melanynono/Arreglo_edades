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
}

dibujarTablas();