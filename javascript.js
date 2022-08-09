

//Primero declaro mi array vacío, en el cual voy a ir agregando distintos juegos que van a estar disponibles en la tienda, mediante las class constructor.

const juegos = []

class Videojuego {
    constructor (nombre, descripcion, imagen, precio) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.precio = precio;
}}

juegos.push (new Videojuego ("Tales of Berseria", "En Tales of Berseria, los jugadores emprenden un viaje de autodescubrimiento adoptando el rol de Velvet, una joven cuya personalidad, antaño dulce, ha sido sustituida por una ira y un odio exacerbados producto de una traumática experiencia ocurrida tres años antes de los eventos de Tales of Berseria.\nJRPG\nUn jugador", "./Assets/talesofberseria.jpg", 49.99));
juegos.push (new Videojuego ("Baldur's Gate 3", "Reúne a tu grupo y vuelve a los Reinos Olvidados en un relato de compañerismo y traición, sacrificio y supervivencia, además de la atracción de un poder absoluto.\nRPGn\nUn jugador, Cooperativo en línea", "./Assets/baldursgate3.jpg", 59.99));
juegos.push (new Videojuego ("Hollow Knight", "Una aventura de acción clásica en 2D ambientada en un vasto mundo interconectado. Explora cavernas tortuosas, ciudades antiguas y páramos mortales. Combate contra criaturas corrompidas, haz amistad con extraños insectos y resuelve los antiguos misterios que yacen en el corazón de reino.\nPlataforma\nUn jugador", "./Assets/hollowknight.jpg", 9.99));
juegos.push (new Videojuego ("Divine Divinity", "Un juego de rol épico con acción hack-and-slash, que ofrece un amplio mundo para explorar y miles de objetos para investigar, comerciar y utilizar.\nRPG\nUn jugador", "./Assets/divinedivinity.jpg", 5.99));
juegos.push (new Videojuego ("Return to Monkey Island", "El inesperado y emocionante regreso del creador de la serie, Ron Gilbert, que retoma la historia de las legendarias aventuras gráficas «The Secret of Monkey Island» y «Monkey Island 2: LeChuck's Revenge», desarrollado en colaboración con Lucasfilm Games.\nAventura gráfica\nUn jugador", "./Assets/returntomonkeyisland.jpg", 14.99));
juegos.push (new Videojuego ("Final Fantasy IX", "Uno de los juegos de rol japoneses más aclamados, fue lanzado al mercado en el año 2000 (2001 en territorio europeo) y se convirtió en un éxito con más de 5,5 millones de copias vendidas en todo el mundo.No te pierdas esta oportunidad y disfruta ahora de las aventuras de Yitán, Vivi y compañía en esta versión para PC.\nJRPG\nUn jugador", "./Assets/finalfantasyix.jpg", 20.99));
juegos.push (new Videojuego ("Cuphead", "Un juego de acción clásico estilo 'dispara y corre' que se centra en combates contra el jefe. Inspirado en los dibujos animados de los años 30, los aspectos visual y sonoro están diseñados con esmero empleando las mismas técnicas de la época, es decir, animación tradicional a mano, fondos de acuarela y grabaciones originales de jazz.\nPlataforma\nUn jugador, Cooperativo en línea", "./Assets/cuphead.jpg", 19.99));
juegos.push (new Videojuego ("Divinity: Original Sin 2", "La Divinidad está muerta. El Vacío se acerca. Y los poderes que yacen dormidos en tu interior están a punto de despertar.La batalla por la Divinidad ha empezado. Elije sabiamente y no regales tu confianza; la oscuridad acecha en cada corazón.\nRPG\nUn jugador, Cooperativo en línea", "./Assets/divinityoriginalsin2.jpg", 44.99));

//Luego declaro una variable, para ir agregado al html de forma dinámica las tarjetas que corresponden a cada juego mediante el innerHTML, utilizando Bootsrap.

let tarjetas = document.getElementById ("tarjetas");

//for (const juego of juegos){

tarjetas.innerHTML = for (const juego of juegos){
    `
    <div class="card" style="width: 18rem;">
        <img src=${juegos[0].imagen} class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${juegos[0].nombre}</h5>
            <p class="card-text">${juegos[0].descripcion}</p>
            <a href="#" class="btn btn-primary">COMPRAR</a>
        </div>
    </div>
`;
}







/*

// armo un array de mis objetos, y un array para el carrito





const carrito = [0]
const juegos=[
    {
        titulo: "Tales of Berseria",
        genero: "JRPG",
        precio:49.99,
        caracteristicas: "Un jugador"
    },
    {
        titulo: "Baldur's Gate 3",
        genero: "RPG",
        precio:59.99,
        caracteristicas: "Un jugador, cooperativo en línea"
    },
    {
        titulo: "Hollow Knight",
        genero: "Plataforma",
        precio:9.99,
        caracteristicas: "Un jugador"
    },
    {
        titulo: "Divine Divinity",
        genero: "RPG",
        precio:5.99,
        caracteristicas: "Un jugador"
    },
    {
        titulo: "Return to Monkey Island",
        genero: "Aventura gráfica",
        precio:14.99,
        caracteristicas: "Un jugador"
    },
    {
        titulo: "Final Fantasy IX",
        genero: "JRPG",
        precio:20.99,
        caracteristicas: "Un jugador"
    },
    {
        titulo: "Cuphead",
        genero: "Plataforma",
        precio:19.99,
        caracteristicas: "Un jugador, cooperativo local"
    },
    {
        titulo: "Divinity: Original Sin 2",
        genero: "RPG",
        precio:44.99,
        caracteristicas: "Un jugador, cooperativo en línea"
    },
];

//Declaro una función para ir añadiendo los títulos de los juegos que quiere comprar el cliente al array del carrito.


function comprarJuegos() {
    let comprar = prompt ("¿Qué juego te gustaría comprar?"); 
    for (const juego of juegos) {
        if (comprar == juego.titulo) {                
                carrito.push (juego.precio);
                console.log ("Se ha añadido "+comprar+" al carrito");
                console.log (carrito);
                comprarJuegos ();                
        }else{
            alert("Lo sentimos, no contamos con ese juego aún");
            break;
        }
    }
};

comprarJuegos ();

function precioTotal() {
    let total = carrito.reduce(function (precioActual, precioAgregado){
        return precioActual + precioAgregado;
    } );
    console.log ("El total a pagar es de $"+total);
};

precioTotal ();
*/