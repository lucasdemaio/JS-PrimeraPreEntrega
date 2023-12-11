//SIMULADOR PARA COMPRA CARNICERIA

const precioKgAsado = 4000
const precioKgVacio =  5000
const precioKgCerdo = 3000
const precioKgChorizo = 2500
const precioKgAchuras = 4500
const descuento = 0.80
let pedidoAsado
let pedidoVacio
let pedidoCerdo
let pedidoChorizo
let pedidoAchuras


function suma(valor1, valor2, valor3, valor4, valor5){
    return(((valor1)*precioKgAsado) + ((valor2)*precioKgVacio) + ((valor3)*precioKgCerdo) + ((valor4)*precioKgChorizo) + ((valor5)*precioKgAchuras))    
};

function promocion(total){
    return(total*descuento);
};


let entrada = prompt("Escriba que producto desea: Asado, Vacio, Cerdo, Chorizo, Achuras. O Ingrese SALIR para finalizar").toLowerCase();

while (entrada != "salir") {
    switch (entrada) {
        case "asado":
            pedidoAsado = Number(prompt("Cuantos Kg de Asado quiere comprar?"));
            alert(`Ha elegido comprar ${pedidoAsado}kg de Asado`);
            break;
        case "vacio":
            pedidoVacio = Number(prompt("Cuantos Kg de Vacio quiere comprar?"));
            alert(`Ha elegido comprar ${pedidoAsado}kg de Vacio`);
            break;
        case "cerdo":
            pedidoCerdo = Number(prompt("Cuantos Kg de Cerdo quiere comprar?"));
            alert(`Ha elegido comprar ${pedidoCerdo}kg de Cerdo`);
            break;
        case "chorizo":
            pedidoChorizo = Number(prompt("Cuantos Kg de Chorizo quiere comprar?"));
            alert(`Ha elegido comprar ${pedidoChorizo}kg de Chorizo`);
            break;
        case "achuras":
            pedidoAchuras = Number(prompt("Cuantos Kg de Achuras quiere comprar?"));
            alert(`Ha elegido comprar ${pedidoAchuras}kg de Achuras`);
            break;
        default:
            alert("Debe ingresar uno de los productos disponibles");
            break;
    }
    entrada = prompt("Escriba que producto desea: ASADO, VACIO, CERDO, CHORIZO, ACHURAS. O Ingrese SALIR para finalizar").toLowerCase();
};

if (pedidoAsado === null || pedidoAsado === undefined || pedidoAsado === '') 
    pedidoAsado = 0

if (pedidoVacio === null || pedidoVacio === undefined || pedidoVacio === '')
    pedidoVacio = 0

if (pedidoCerdo === null || pedidoCerdo === undefined || pedidoCerdo === '')
    pedidoCerdo = 0

if (pedidoChorizo === null || pedidoChorizo === undefined || pedidoChorizo === '')
    pedidoChorizo = 0

if (pedidoAchuras === null || pedidoAchuras === undefined || pedidoAchuras === '')
    pedidoAchuras = 0
;

let total = suma(pedidoAsado, pedidoVacio, pedidoChorizo, pedidoCerdo, pedidoAchuras);


if (total > 15000){    
    let totalConDescuento = promocion(total);

    alert(`Su resumen de compra es:
    Asado ${pedidoAsado}kg
    Vacio ${pedidoVacio}kg
    Cerdo ${pedidoCerdo}kg
    Chorizo ${pedidoChorizo}kg
    Achuras ${pedidoAchuras}kg
    El total es de $${total}, con descuento por superar los $15000 es de $${totalConDescuento}`);
} 
else if (total === 0) {
    alert("No ha realizado ninguna compra")
} 
else{
    alert(`Su resumen de compra es:
    Asado ${pedidoAsado}kg
    Vacio ${pedidoVacio}kg
    Cerdo ${pedidoCerdo}kg
    Chorizo ${pedidoChorizo}kg
    Achuras ${pedidoAchuras}kg  
    
    El total a pagar es de $${total}`)
};

