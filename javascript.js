
//declaracion variables y constante
let cantidad = parseFloat(prompt ("¿qué cantidad de pesos quisieras convertir a dólares? para salir escribe 000"));

const VENTADOLAR = 324;


//ciclo de iteracion y condicional

while (cantidad !=000){        
        if (cantidad!=0){
            let dolar = parseFloat (cantidad/VENTADOLAR);
            alert ("Usted puede comprar un total de "+dolar+" dolares");            
        }else{
            alert("El monto ingresado no es válido");
        }    
    cantidad = parseFloat(prompt ("¿qué cantidad quisieras convertir?"));
}
