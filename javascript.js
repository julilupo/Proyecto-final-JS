
// armo un array de mis objetos, y un array para el carrito

const carrito = []
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
    let comprar; 
    do{
        comprar = prompt ("¿Qué juego te gustaría comprar?");
        for (const juego of juegos){
            if (juego.titulo == comprar){
                carrito.push (comprar);
                console.log ("Se ha añadido "+comprar+" al carrito");
                console.log (carrito);
            }
        }
    }while (comprar != "")
}

comprarJuegos ()




