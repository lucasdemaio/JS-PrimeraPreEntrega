//SIMULADOR PARA COMPRA CARNICERIA

//declaro variables
const precioKgAsado = 4000
const precioKgVacio =  5000
const precioKgCerdo = 3000
const precioKgChorizo = 2500
const precioKgAchuras = 4500
const descuento = 0.80
let pedidoAsado
let totalPedidoAsado
let pedidoVacio
let totalPedidoVacio
let pedidoCerdo
let totalPedidoCerdo
let pedidoChorizo
let totalPedidoChorizo
let pedidoAchuras
let totalPedidoAchuras

//FUNCIONES

function suma(valor1, valor2, valor3, valor4, valor5){
    return(((valor1)*precioKgAsado) + ((valor2)*precioKgVacio) + ((valor3)*precioKgCerdo) + ((valor4)*precioKgChorizo) + ((valor5)*precioKgAchuras))    
};

function promocion(total){
    return(total*descuento);
};


//

let entrada = prompt("Escriba que producto desea: \n Asado, Vacio, Cerdo, Chorizo, Achuras. \n \n O Ingrese SALIR para finalizar").toLowerCase();

while (entrada != "salir") {
    switch (entrada) {
        case "asado":
            pedidoAsado = Number(prompt("Cuantos Kg de Asado quiere comprar?"));
                if (totalPedidoAsado === null || totalPedidoAsado === undefined || totalPedidoAsado === '')
                totalPedidoAsado = 0
            totalPedidoAsado = totalPedidoAsado + pedidoAsado
            alert(`Ha elegido comprar ${totalPedidoAsado}kg de Asado`);
            break;
        case "vacio":
            pedidoVacio = Number(prompt("Cuantos Kg de Vacio quiere comprar?"));
                if (totalPedidoVacio === null || totalPedidoVacio === undefined || totalPedidoVacio === '')
                totalPedidoVacio = 0
            totalPedidoVacio = totalPedidoVacio + pedidoVacio
            alert(`Ha elegido comprar ${totalPedidoVacio}kg de Vacio`);
            break;
        case "cerdo":
            pedidoCerdo = Number(prompt("Cuantos Kg de Cerdo quiere comprar?"));
                if (totalPedidoCerdo === null || totalPedidoCerdo === undefined || totalPedidoCerdo === '')
                totalPedidoCerdo = 0
            totalPedidoCerdo = totalPedidoCerdo + pedidoCerdo
            alert(`Ha elegido comprar ${totalPedidoCerdo}kg de Cerdo`);
            break;
        case "chorizo":
            pedidoChorizo = Number(prompt("Cuantos Kg de Chorizo quiere comprar?"));
            if (totalPedidoChorizo === null || totalPedidoChorizo === undefined || totalPedidoChorizo === '')
                totalPedidoChorizo = 0
            totalPedidoChorizo = totalPedidoChorizo + pedidoChorizo
        alert(`Ha elegido comprar ${totalPedidoChorizo}kg de Chorizo`);
        break;
        case "achuras":
            pedidoAchuras = Number(prompt("Cuantos Kg de Chorizo quiere comprar?"));
            if (totalPedidoAchuras === null || totalPedidoAchuras === undefined || totalPedidoAchuras === '')
                totalPedidoAchuras = 0
            totalPedidoAchuras = totalPedidoAchuras + pedidoAchuras
        alert(`Ha elegido comprar ${totalPedidoAchuras}kg de Achuras`);
        break;
        default:
            alert("Debe ingresar uno de los productos disponibles");
            break;
    }
    entrada = prompt("Escriba que producto desea agregar o modificar: \n Asado, Vacio, Cerdo, Chorizo, Achuras. \n \n O Ingrese SALIR para finalizar").toLowerCase();
};

//PARA EVITAR BUG, En caso que no haya ingresado productos asigna el valor 0

if (totalPedidoAsado === null || totalPedidoAsado === undefined || totalPedidoAsado === '') 
    totalPedidoAsado = 0

if (totalPedidoVacio === null || totalPedidoVacio === undefined || totalPedidoVacio === '')
    totalPedidoVacio = 0

if (totalPedidoCerdo === null || totalPedidoCerdo === undefined || totalPedidoCerdo === '')
    totalPedidoCerdo = 0

if (totalPedidoChorizo === null || totalPedidoChorizo === undefined || totalPedidoChorizo === '')
    totalPedidoChorizo = 0

if (totalPedidoAchuras === null || totalPedidoAchuras === undefined || totalPedidoAchuras === '')
    totalPedidoAchuras = 0
;

//Declaro variable para suma de los pedidos

let total = suma(totalPedidoAsado, totalPedidoVacio, totalPedidoChorizo, totalPedidoCerdo, totalPedidoAchuras);

//Verifica si aplica descuento, detalla la compra, e importes

if (total > 15000){    
    let totalConDescuento = promocion(total);

    alert(`Su resumen de compra es:
    \nAsado ${totalPedidoAsado}kg \nVacio ${totalPedidoVacio}kg \nCerdo ${totalPedidoCerdo}kg \nChorizo ${totalPedidoChorizo}kg \nAchuras ${totalPedidoAchuras}kg
    \n\nEl total es de $${total}, \ncon descuento por superar los $15000 es de $${totalConDescuento}`);
} 
else if (total === 0) {
    alert("No ha realizado ninguna compra")
} 
else{
    alert(`Su resumen de compra es:
    \nAsado ${totalPedidoAsado}kg \nVacio ${totalPedidoVacio}kg \nCerdo ${totalPedidoCerdo}kg \nChorizo ${totalPedidoChorizo}kg \nAchuras ${totalPedidoAchuras}kg
    \n\nEl total a pagar es de $${total}`)
};

