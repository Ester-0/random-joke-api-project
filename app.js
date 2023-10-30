// Tu códgigo aquí
const image = document.querySelector('img');

// Recupero el boton del DOM
const jokeDIV = document.querySelector('#display-joke');
const button = document.querySelector('#get-joke');

// Añado un listener evento 'click'
button.addEventListener("click", async function () {
   
    // modificar el elemento de DOM donde deveria ir el chiste
    const respuesta = await fetch("https://api.chucknorris.io/jokes/random");
    const datos = await respuesta.json();
    
    console.log(datos.value)

    jokeDIV.textContent = "Soy un chiste de Chuck Norris" , respuesta;
});