/* Primero declaro un array vacío, en el cual voy a ir agregando distintos juegos que van a estar disponibles en la tienda, 
utilizando las clases y el método constructor, para poder ir agregandolos de forma simple y genérica */

const juegos = [];
const carrito = [];

class Videojuego {
    constructor (id, nombre, descripcion, genero, caracteristicas, imagen, precio) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.genero = genero;
    this.caracteristicas = caracteristicas;
    this.imagen = imagen;    
    this.precio = precio;
}}

juegos.push (new Videojuego (1, "Tales of Berseria", "Emprende un viaje de autodescubrimiento adoptando el rol de Velvet, una joven cuya personalidad, antaño dulce, ha sido sustituida por una ira y un odio exacerbados producto de una traumática experiencia ocurrida tres años antes de los eventos de Tales of Berseria.", "JRPG", "Un jugador", "./Assets/talesofberseria.jpg", 49.99));

juegos.push (new Videojuego (2, "Baldur's Gate 3", "Reúne a tu grupo y vuelve a los Reinos Olvidados en un relato de compañerismo y traición, sacrificio y supervivencia, además de la atracción de un poder absoluto.","RPG", "Un jugador, Cooperativo en línea", "./Assets/baldursgate3.jpg", 59.99));

juegos.push (new Videojuego (3, "Hollow Knight", "Una aventura de acción clásica en 2D ambientada en un vasto mundo interconectado. Explora cavernas tortuosas, ciudades antiguas y páramos mortales. Combate contra criaturas corrompidas, haz amistad con extraños insectos y resuelve los antiguos misterios que yacen en el corazón de reino.","Plataforma", "Un jugador", "./Assets/hollowknight.jpg", 9.99));

juegos.push (new Videojuego (4, "Divine Divinity", "El juego narra la inacabable batalla entre valerosos héroes y los destructivos poderes del Caos desatados por el Anillo Negro, una secta dedicada al mal. Jugarás en la piel del profetizado Elegido quien deberá unificar las siete razas de Rivellon para que puedas convertirte en el Divino y evitar el nacimiento del Señor del Caos.","RPG","Un jugador", "./Assets/divinedivinity.jpg", 5.99));

juegos.push (new Videojuego (5, "Return to Monkey Island", "El inesperado y emocionante regreso del creador de la serie, Ron Gilbert, que retoma la historia de las legendarias aventuras gráficas «The Secret of Monkey Island» y «Monkey Island 2: LeChuck's Revenge», desarrollado en colaboración con Lucasfilm Games.", "Aventura gráfica", "Un jugador", "./Assets/returntomonkeyisland.jpg", 14.99));

juegos.push (new Videojuego (6, "Final Fantasy IX", "Uno de los juegos de rol japoneses más aclamados, fue lanzado al mercado en el año 2000 (2001 en territorio europeo) y se convirtió en un éxito con más de 5,5 millones de copias vendidas en todo el mundo.No te pierdas esta oportunidad y disfruta ahora de las aventuras de Yitán, Vivi y compañía en esta versión para PC.", "JRPG", "Un jugador", "./Assets/finalfantasyix.jpg", 20.99));

juegos.push (new Videojuego (7, "Cuphead", "Un juego de acción clásico estilo 'dispara y corre' que se centra en combates contra jefes. Inspirado en los dibujos animados de los años 30, los aspectos visual están diseñados con esmero empleando las mismas técnicas de la época; animación tradicional a mano, fondos de acuarela y grabaciones originales de jazz.", "Plataforma", "Un jugador, Cooperativo en línea", "./Assets/cuphead.jpg", 19.99));

juegos.push (new Videojuego (8, "Divinity: Original Sin 2", "La Divinidad está muerta. El Vacío se acerca. Y los poderes que yacen dormidos en tu interior están a punto de despertar.La batalla por la Divinidad ha empezado. Elije sabiamente y no regales tu confianza; la oscuridad acecha en cada corazón.", "RPG", "Un jugador, Cooperativo en línea", "./Assets/divinityoriginalsin2.jpg", 44.99));

/*Luego declaro una variable para llamar al div del html en dónde quiero que se vayan agregando las tarjetas, 
y utilizando una nueva variable y un for each para recorrer el array dónde se encuentran mis juegos disponibles, 
voy insertando las tarjetas en el html de mi página de forma dinámica y genérica, para así a medida que se agreguen juegos en mi array
se vayan creado tarjetas para cada uno*/

let tarjetas = document.getElementById ("tarjetas");

let htmlTarjetas = "";

juegos.forEach((juego) => {
    htmlTarjetas += `
    <div class="card border-info m-3 p-2" style="width: 18rem;">
    <img src=${juego.imagen} class="card-img-top" alt="Portada del juego ${juego.nombre}">
    <div class="card-body d-flex flex-column justify-content-between">
        <h5 class="card-title mt-1 text-center fw-bolder">${juego.nombre}</h5>
        <p class="card-text mt-1">${juego.descripcion}</p>
        <ul>
            <li><u>Género</u>: ${juego.genero}</li>
            <li><u>Características</u>: ${juego.caracteristicas}</li>        
        </ul>
    </div>
    <div class="card-footer d-flex justify-content-center">
        <button id="btnComprar${juego.id}" class="btn btn-info fw-semibold">COMPRAR POR $ ${juego.precio}</button>
    </div>
    </div>
    `
});

tarjetas.innerHTML = htmlTarjetas;



let botonStart = document.getElementById("btnStart");
botonStart.onclick = () => location.href='#juegosDisponibles';

let botonComprar = document.getElementById("btnComprar${juego.id}");

botonComprar.onclick = () => {


}