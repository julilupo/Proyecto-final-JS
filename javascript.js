
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

//Declaro una función para ir añadiendo los títulos de los juegos que quiere comprar el cliente al array del carrito, cuando el titulo ingresado esté vacío se termina el bucle.


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



