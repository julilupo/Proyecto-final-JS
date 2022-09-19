//Método constructor que voy a utilizar para ir agregando los juegos que van a estar disponibles en la tienda, y los elementos que se vayan agregando al carrito



class ElementoCarrito {
    constructor (videojuego, cantidad) {
        this.videojuego = videojuego;
        this.cantidad = cantidad;
    }
}

//definiciones de constantes

const estandarDolaresAmericanos = Intl.NumberFormat('en-US');

//Arrays donde cargamos los videojuegos disponibles en la tienda, y los productos del carrito

let videojuegos = [];
const elementosCarrito = [];

//Llamado a las variables que necesitamos con el dom

let tarjetasJuegos = document.getElementById ("tarjetas-juegos");
let botonStart = document.getElementById ("btnStart");
let itemsCarrito = document.getElementById ("itemsCarrito");
let footerCarrito = document.getElementById ("footer");
let botonFinalizarCompra = document.getElementById ("btnFinalizarCompra");
let botonVaciarCarrito = document.getElementById ("btnVaciarCarrito");

//Declaramos variables que vamos a utilizar



//Ejecución de funciones

//dibujarCatalogoJuegos ();
//vaciarCarritoCompras ();


//          Armado de funciones


//Función para crear las tarjetas del catalogo de videojuegos

function dibujarCatalogoJuegos () {
    console.log (videojuegos);
    videojuegos.forEach ((videojuego) => {
            let contenedorTarjetas = crearTarjetas (videojuego);
            tarjetasJuegos.append(contenedorTarjetas);
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
    
    //evento botón comprar
    botonComprar.onclick = () => {
        let elementoCarrito = new ElementoCarrito(videojuego, 1);
        elementosCarrito.push(elementoCarrito);

        dibujarCarrito ();

        //Alerta mediante Librería Sweet Alert

        swal({
            text: `¡${videojuego.nombre} agregado al carrito!`,            
            icon: "success",
            /*buttons: {
                continuar: {
                    text: "Seguir comprando",
                    value: false
                },
                carrito: {
                    text: "Finalizar compra",
                    value: true
                }
            }
        }).then((irAlCarrito) => {

            if(irAlCarrito) {

                const offcanvasCarrito = new bootstrap.Offcanvas(document.getElementById('offcanvasRight'), {keyboard: true}),
                const btnCarrito = document.getElementById ("btnCarrito"),
                offcanvasCarrito.show (btnCarrito)
            }*/
        });
    }  
    
    return tarjeta;
}


//función para crear el carrito

function dibujarCarrito () {
    
    itemsCarrito.innerHTML = "";

    let sumaCarrito = 0;

    elementosCarrito.forEach (
        (elemento) => {
            let renglonesCarrito= document.createElement("tr");

            renglonesCarrito.innerHTML = `
                <td>${elemento.videojuego.id}</td>
                <td>${elemento.videojuego.nombre}</td>
                <td>$ ${estandarDolaresAmericanos.format(elemento.videojuego.precio)}</td>            
            `;
        itemsCarrito.append (renglonesCarrito);
        
        sumaCarrito += elemento.videojuego.precio;
        }
    );

    if (elementosCarrito.length == 0) {
        footerCarrito.innerHTML = `
        <th class="text-center" scope="row" colspan="4">El carrito se encuentra vacío</th>`;
    } else {
        footerCarrito.innerHTML = `
        <th class="text-center" scope="row" colspan="4">Total de tu compra: $${estandarDolaresAmericanos.format(sumaCarrito)}</th>
        `;
        botonVaciarCarrito.onclick = () => {
            swal ({
                icon: "warning",
                text: "¿Estás segura/o que quieres vaciar el carrito?",
                buttons: {
                    confirmar: {
                        text: "Si, lo estoy",
                        value: true
                    },
                    cancelar: {
                        text: "No, volvamos",
                        value: false
                    }
                }
            }).then ((vaciarCarrito) => {
                if (vaciarCarrito) {
                    elementosCarrito.splice (0, elementosCarrito.lenght);
                    dibujarCarrito ();
                }
            });
        }
    }
}

async function obtenerJsonLocal () {
    const URLJSON = "./JS/juegos.json";
    const respuesta = await fetch (URLJSON)
    const data = await respuesta.json()
    videojuegos = data;
    dibujarCatalogoJuegos();
}


obtenerJsonLocal ();
//eventos

botonStart.onclick = () => location.href='#juegosDisponibles';
