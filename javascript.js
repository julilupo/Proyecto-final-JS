

//Primero declaro mi array vacío, en el cual voy a ir agregando distintos juegos que van a estar disponibles en la tienda, mediante las class constructor.

const juegos = []

class Videojuego {
    constructor (nombre, descripcion, imagen, precio) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.precio = precio;
}}

juegos.push (new Videojuego ("Tales of Berseria", "Emprende un viaje de autodescubrimiento adoptando el rol de Velvet, una joven cuya personalidad, antaño dulce, ha sido sustituida por una ira y un odio exacerbados producto de una traumática experiencia ocurrida tres años antes de los eventos de Tales of Berseria.\nJRPG\nUn jugador", "./Assets/talesofberseria.jpg", 49.99));
juegos.push (new Videojuego ("Baldur's Gate 3", "Reúne a tu grupo y vuelve a los Reinos Olvidados en un relato de compañerismo y traición, sacrificio y supervivencia, además de la atracción de un poder absoluto.\nRPG\nUn jugador, Cooperativo en línea", "./Assets/baldursgate3.jpg", 59.99));
juegos.push (new Videojuego ("Hollow Knight", "Una aventura de acción clásica en 2D ambientada en un vasto mundo interconectado. Explora cavernas tortuosas, ciudades antiguas y páramos mortales. Combate contra criaturas corrompidas, haz amistad con extraños insectos y resuelve los antiguos misterios que yacen en el corazón de reino.\nPlataforma\nUn jugador", "./Assets/hollowknight.jpg", 9.99));
juegos.push (new Videojuego ("Divine Divinity", "Un juego de rol épico con acción hack-and-slash, que ofrece un amplio mundo para explorar y miles de objetos para investigar, comerciar y utilizar.\nRPG\nUn jugador", "./Assets/divinedivinity.jpg", 5.99));
juegos.push (new Videojuego ("Return to Monkey Island", "El inesperado y emocionante regreso del creador de la serie, Ron Gilbert, que retoma la historia de las legendarias aventuras gráficas «The Secret of Monkey Island» y «Monkey Island 2: LeChuck's Revenge», desarrollado en colaboración con Lucasfilm Games.\nAventura gráfica\nUn jugador", "./Assets/returntomonkeyisland.jpg", 14.99));
juegos.push (new Videojuego ("Final Fantasy IX", "Uno de los juegos de rol japoneses más aclamados, fue lanzado al mercado en el año 2000 (2001 en territorio europeo) y se convirtió en un éxito con más de 5,5 millones de copias vendidas en todo el mundo.No te pierdas esta oportunidad y disfruta ahora de las aventuras de Yitán, Vivi y compañía en esta versión para PC.\nJRPG\nUn jugador", "./Assets/finalfantasyix.jpg", 20.99));
juegos.push (new Videojuego ("Cuphead", "Un juego de acción clásico estilo 'dispara y corre' que se centra en combates contra jefes. Inspirado en los dibujos animados de los años 30, los aspectos visual están diseñados con esmero empleando las mismas técnicas de la época; animación tradicional a mano, fondos de acuarela y grabaciones originales de jazz.\nPlataforma\nUn jugador, Cooperativo en línea", "./Assets/cuphead.jpg", 19.99));
juegos.push (new Videojuego ("Divinity: Original Sin 2", "La Divinidad está muerta. El Vacío se acerca. Y los poderes que yacen dormidos en tu interior están a punto de despertar.La batalla por la Divinidad ha empezado. Elije sabiamente y no regales tu confianza; la oscuridad acecha en cada corazón.\nRPG\nUn jugador, Cooperativo en línea", "./Assets/divinityoriginalsin2.jpg", 44.99));

//Luego declaro una variable, para ir agregado al html de forma dinámica las tarjetas que corresponden a cada juego mediante el innerHTML, utilizando Bootsrap.

let tarjetas = document.getElementById ("tarjetas");

tarjetas.innerHTML = `
    <div class="card border-info m-3 p-3" style="width: 18rem;">
    <img src=${juegos[0].imagen} class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${juegos[0].nombre}</h5>
        <p class="card-text">${juegos[0].descripcion}</p>
    </div>
    <div class="card-footer d-flex justify-content-center">
        <a href="#" class="btn btn-info">COMPRAR POR $ ${juegos[0].precio}</a>
    </div>
    </div>
    <div class="card border-info m-3 p-3" style="width: 18rem;">
    <img src=${juegos[1].imagen} class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${juegos[1].nombre}</h5>
        <p class="card-text">${juegos[1].descripcion}</p>
    </div>
    <div class="card-footer d-flex justify-content-center">
        <a href="#" class="btn btn-info">COMPRAR POR $ ${juegos[1].precio}</a>
    </div>
</div>
<div class="card border-info m-3 p-3" style="width: 18rem;">
    <img src=${juegos[2].imagen} class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${juegos[2].nombre}</h5>
        <p class="card-text">${juegos[2].descripcion}</p>
    </div>
    <div class="card-footer d-flex justify-content-center">
        <a href="#" class="btn btn-info">COMPRAR POR $ ${juegos[2].precio}</a>
    </div>
</div>
<div class="card border-info m-3 p-3" style="width: 18rem;">
    <img src=${juegos[3].imagen} class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${juegos[3].nombre}</h5>
        <p class="card-text">${juegos[3].descripcion}</p>
    </div>
    <div class="card-footer d-flex justify-content-center">
        <a href="#" class="btn btn-info">COMPRAR POR $ ${juegos[3].precio}</a>
    </div>
</div>
<div class="card border-info m-3 p-3" style="width: 18rem;">
    <img src=${juegos[4].imagen} class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${juegos[4].nombre}</h5>
        <p class="card-text">${juegos[4].descripcion}</p>
    </div>
    <div class="card-footer d-flex justify-content-center">
        <a href="#" class="btn btn-info">COMPRAR POR $ ${juegos[4].precio}</a>
    </div>
</div>
<div class="card border-info m-3 p-3" style="width: 18rem;">
    <img src=${juegos[5].imagen} class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${juegos[5].nombre}</h5>
        <p class="card-text">${juegos[5].descripcion}</p>
    </div>
    <div class="card-footer d-flex justify-content-center">
        <a href="#" class="btn btn-info">COMPRAR POR $ ${juegos[5].precio}</a>
    </div>
</div>
<div class="card border-info m-3 p-3" style="width: 18rem;">
    <img src=${juegos[6].imagen} class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${juegos[6].nombre}</h5>
        <p class="card-text">${juegos[6].descripcion}</p>
    </div>
    <div class="card-footer d-flex justify-content-center">
        <a href="#" class="btn btn-info">COMPRAR POR $ ${juegos[6].precio}</a>
    </div>
</div>
<div class="card border-info m-3 p-3" style="width: 18rem;">
    <img src=${juegos[7].imagen} class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${juegos[7].nombre}</h5>
        <p class="card-text">${juegos[7].descripcion}</p>
    </div>
    <div class="card-footer d-flex justify-content-center">
        <a href="#" class="btn btn-info">COMPRAR POR $ ${juegos[7].precio}</a>
    </div>
</div>
`;





