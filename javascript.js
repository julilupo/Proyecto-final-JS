//Método constructor que voy a utilizar para ir agregando los juegos que van a estar disponibles en la tienda, y los elementos que se vayan agregando al carrito


class Videojuego {
    constructor (id, nombre, descripcion, genero, caracteristicas, imagen, precio) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.genero = genero;
        this.caracteristicas = caracteristicas;
        this.imagen = imagen;    
        this.precio = precio;
    }
}

class JuegoCarrito {
    constructor (videojuego, cantidad) {
        this.videojuego = videojuego;
        this.cantidad = cantidad;
    }
}

//Arrays donde cargamos los videojuegos disponibles en la tienda, y los productos del carrito

const videojuegos = [];
const juegosCarrito = [];

//Llamado a las variables que necesitamos con el dom

let tarjetasJuegos = document.getElementById ("tarjetas-juegos");
let botonStart = document.getElementById("btnStart");
let botonFinalizar = document.getElementById("btnFinalizarCompra");

//Declaramos variables que vamos a utilizar



//Ejecución de funciones

cargarVideojuegos ();
crearTarjetas ();
dibujarCatalogoJuegos ();


//          Armado de funciones

//Función para agregar los videojuegos disponibles en la tienda

function cargarVideojuegos () {
    
    videojuegos.push (new Videojuego (1, "Tales of Berseria", "Emprende un viaje de autodescubrimiento adoptando el rol de Velvet, una joven cuya personalidad, antaño dulce, ha sido sustituida por una ira y un odio exacerbados producto de una traumática experiencia ocurrida tres años antes de los eventos de Tales of Berseria.", "JRPG", "Un jugador", "./Assets/talesofberseria.jpg", 49.99));
    videojuegos.push (new Videojuego (2, "Baldur's Gate 3", "Reúne a tu grupo y vuelve a los Reinos Olvidados en un relato de compañerismo y traición, sacrificio y supervivencia, además de la atracción de un poder absoluto.","RPG", "Un jugador, Cooperativo en línea", "./Assets/baldursgate3.jpg", 59.99));
    videojuegos.push (new Videojuego (3, "Hollow Knight", "Una aventura de acción clásica en 2D ambientada en un vasto mundo interconectado. Explora cavernas tortuosas, ciudades antiguas y páramos mortales. Combate contra criaturas corrompidas, haz amistad con extraños insectos y resuelve los antiguos misterios que yacen en el corazón de reino.","Plataforma", "Un jugador", "./Assets/hollowknight.jpg", 9.99));
    videojuegos.push (new Videojuego (4, "Divine Divinity", "El juego narra la inacabable batalla entre valerosos héroes y los destructivos poderes del Caos desatados por el Anillo Negro, una secta dedicada al mal. Jugarás en la piel del profetizado Elegido quien deberá unificar las siete razas de Rivellon para que puedas convertirte en el Divino y evitar el nacimiento del Señor del Caos.","RPG","Un jugador", "./Assets/divinedivinity.jpg", 5.99));
    videojuegos.push (new Videojuego (5, "Return to Monkey Island", "El inesperado y emocionante regreso del creador de la serie, Ron Gilbert, que retoma la historia de las legendarias aventuras gráficas «The Secret of Monkey Island» y «Monkey Island 2: LeChuck's Revenge», desarrollado en colaboración con Lucasfilm Games.", "Aventura gráfica", "Un jugador", "./Assets/returntomonkeyisland.jpg", 14.99));
    videojuegos.push (new Videojuego (6, "Final Fantasy IX", "Uno de los juegos de rol japoneses más aclamados, fue lanzado al mercado en el año 2000 (2001 en territorio europeo) y se convirtió en un éxito con más de 5,5 millones de copias vendidas en todo el mundo.No te pierdas esta oportunidad y disfruta ahora de las aventuras de Yitán, Vivi y compañía en esta versión para PC.", "JRPG", "Un jugador", "./Assets/finalfantasyix.jpg", 20.99));
    videojuegos.push (new Videojuego (7, "Cuphead", "Un juego de acción clásico estilo 'dispara y corre' que se centra en combates contra jefes. Inspirado en los dibujos animados de los años 30, los aspectos visual están diseñados con esmero empleando las mismas técnicas de la época; animación tradicional a mano, fondos de acuarela y grabaciones originales de jazz.", "Plataforma", "Un jugador, Cooperativo en línea", "./Assets/cuphead.jpg", 19.99));
    videojuegos.push (new Videojuego (8, "Divinity: Original Sin 2", "La Divinidad está muerta. El Vacío se acerca. Y los poderes que yacen dormidos en tu interior están a punto de despertar.La batalla por la Divinidad ha empezado. Elije sabiamente y no regales tu confianza; la oscuridad acecha en cada corazón.", "RPG", "Un jugador, Cooperativo en línea", "./Assets/divinityoriginalsin2.jpg", 44.99));
}


//Función para agregar los juegos elegidos al carrito

function dibujarCatalogoJuegos () {
    videojuegos.forEach (
        (videojuego) => {
            let contenedorTarjetas = crearTarjetas (videojuego);
            tarjetasJuegos.append (contenedorTarjetas);
        }
    );
}

function crearTarjetas (videojuego) {
    
    //boton    
    let botonComprar = document.createElement ("button");
    botonComprar.className = "btn btn-info fw-semibold";
    botonComprar.innerText = `COMPRAR POR $ ${videojuego.precio}`;
    
    //card footer
    let footerTarjeta = document.createElement ("div");
    footerTarjeta.className = "card-footer d-flex justify-content-center";
    footerTarjeta.append (botonComprar);
    
    //card body
    let cuerpoTarjeta = document.createElement ("div");
    cuerpoTarjeta.className = "card-body d-flex flex-column justify-content-between";
    cuerpoTarjeta.innerHTML = `
    <h5 class="card-title mt-1 text-center fw-bolder">${videojuego.nombre}</h5>
    <p class="card-text mt-1">${videojuego.descripcion}</p>
    <ul>
    <li><u>Género</u>: ${videojuego.genero}</li>
    <li><u>Características</u>: ${videojuego.caracteristicas}</li>        
    </ul>
    `;
    
    //imagen
    let imagen = document.createElement ("img");
    imagen.src = videojuego.imagen;
    imagen.className = "card-img-top";
    imagen.alt = `Portada del juego ${videojuego.nombre}`;
    
    //Tarjeta
    let tarjeta = document.createElement ("div");
    tarjeta.className = "card border-info m-3 p-2";
    tarjeta.style = "width: 18rem";
    tarjeta.append (imagen);
    tarjeta.append (cuerpoTarjeta);
    tarjeta.append (footerTarjeta);
    
    botonComprar.onclick = () => {
        let juegoCarrito = new JuegoCarrito(videojuego, 1);
        juegosCarrito.push(juegoCarrito);


    }
    
    
    
    return tarjeta;
    
    
    
    
    
    
}

botonStart.onclick = () => location.href='#juegosDisponibles';







































//let htmlTarjetas = "";
//let botonComprar = "";
/*
//agregarAlCarrito ();


//Utilizando el método for each, agregamos de manera dinámica en el html las cards que corresponden a cada juego

catalogoJuegos.forEach(
    (juego) => {
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

function agregarAlCarrito (videojuego) {
    let botonComprar = "";
    catalogoJuegos.forEach(
        (juego) => {
            botonComprar += document.getElementById(`btnComprar${juego.id}`)
            botonComprar.onclick = () => {
                let productoCarrito = new JuegosCarrito (videojuego, 1);
                carrito.push(productoCarrito);
            }
        }
    )
}

console.log (carrito);

tarjetas.innerHTML = htmlTarjetas;
*/
//algunos eventos


