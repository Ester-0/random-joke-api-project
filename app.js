// Tu códgigo aquí
const image = document.querySelector('img');

// Recupero el boton del DOM
const jokeDIV = document.querySelector('#display-joke');
const button = document.querySelector('#get-joke');

// Añado un listener evento 'click'
button.addEventListener("click", async function () {

    // modificar el elemento de DOM donde deveria ir el chiste

    // 1. Obtener los datos de la API
    const respuesta = await fetch("https://api.chucknorris.io/jokes/random");

    //2. Transformarlos en algo que yo manipular con JS (objeto, array de objetos)
    const datos = await respuesta.json();

    //console.log(datos.value);

    //3. Actualizar el nodo o los nodos del DOM
    jokeDIV.textContent = datos.value;
});