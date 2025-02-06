// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let listaAmigos = [];

function agregarAmigo() {

    let nombre = document.getElementById('amigo').value.trim();

    //validar la entrada
    if (nombre === "") {
        alert("por favor ingrese un nombre válido");
        return;
    }
    //verifico que amigo no este en la lista
    if (listaAmigos.includes(nombre)) {
        alert("este amigo ya está en la lista");
        limpiarCaja();
        return;

    }

    listaAmigos.push(nombre);
    limpiarCaja();
    actualizarLista();
}

function actualizarLista() {
    const listaDiv = document.getElementById("listaAmigos");
    if (listaAmigos.length === 0) {
        listaDiv.innerHTML = "Aún no hay amigos agregados.";
    } else {
        listaDiv.innerHTML = listaAmigos.join(", ");
    }

}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("debe haber al menos dos amigos para sortear");
        return;
    }
    let indice = Math.floor(Math.random() * listaAmigos.length);
    document.getElementById("resultado").innerText = "el amigo secreto es: " + listaAmigos[indice];
}
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function reiniciarJuego() {
    listaAmigos = []; // Vaciar la lista de amigos
    actualizarLista(); // Actualizar la pantalla
    document.getElementById("resultado").innerText = ""; // Borrar el resultado
}