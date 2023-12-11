//SIMULADOR PARA COMPRA CARNICERIA

//declaro variables
const precioKgAsado = 4000
const precioKgVacio =  5000
const precioKgCerdo = 3000
const precioKgChorizo = 2500
const precioKgAchuras = 4500
const descuento = 0.80
let pedidoAsado
let totalPedidoAsado = 0
let pedidoVacio
let totalPedidoVacio = 0
let pedidoCerdo
let totalPedidoCerdo = 0
let pedidoChorizo
let totalPedidoChorizo = 0
let pedidoAchuras
let totalPedidoAchuras = 0

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
            while (isNaN(pedidoAsado)) {
                alert("Debe ingresar los kg en numeros")
                pedidoAsado = totalPedidoAsado
                pedidoAsado = Number(prompt("Cuantos Kg de Asado quiere comprar?"))}
            totalPedidoAsado = totalPedidoAsado + pedidoAsado
            alert(`Ha elegido comprar ${totalPedidoAsado}kg de Asado`);    
            break;

        case "vacio":
            pedidoVacio = Number(prompt("Cuantos Kg de Vacio quiere comprar?"));
            while (isNaN(pedidoVacio)) {
                alert("Debe ingresar los kg en numeros")
                pedidoVacio = totalPedidoVacio
                pedidoVacio = Number(prompt("Cuantos Kg de Vacio quiere comprar?"))}
            totalPedidoVacio = totalPedidoVacio + pedidoVacio
            alert(`Ha elegido comprar ${totalPedidoVacio}kg de Vacio`);    
            break;

        case "cerdo":
            pedidoCerdo = Number(prompt("Cuantos Kg de Cerdo quiere comprar?"));
            while (isNaN(pedidoCerdo)) {
                alert("Debe ingresar los kg en numeros")
                pedidoCerdo = totalPedidoCerdo
                pedidoCerdo = Number(prompt("Cuantos Kg de Cerdo quiere comprar?"))}
                totalPedidoCerdo = totalPedidoCerdo + pedidoCerdo
            alert(`Ha elegido comprar ${totalPedidoCerdo}kg de Cerdo`);    
            break;

        case "chorizo":
            pedidoChorizo = Number(prompt("Cuantos Kg de Chorizo quiere comprar?"));
            while (isNaN(pedidoChorizo)) {
                alert("Debe ingresar los kg en numeros")
                pedidoChorizo = totalPedidoChorizo
                pedidoChorizo = Number(prompt("Cuantos Kg de Chorizo quiere comprar?"))}
                totalPedidoChorizo = totalPedidoChorizo + pedidoChorizo
            alert(`Ha elegido comprar ${totalPedidoChorizo}kg de Chorizo`);    
            break;

        case "achuras":
            pedidoAchuras = Number(prompt("Cuantos Kg de Achuras quiere comprar?"));
            while (isNaN(pedidoAchuras)) {
                alert("Debe ingresar los kg en numeros")
                pedidoAchuras = totalPedidoAchuras
                pedidoAchuras = Number(prompt("Cuantos Kg de Achuras quiere comprar?"))}
                totalPedidoAchuras = totalPedidoAchuras + pedidoAchuras
            alert(`Ha elegido comprar ${totalPedidoAchuras}kg de Achuras`);    
            break;
        default:
            alert("Debe escribir algunos de los productos listado")
    }
    entrada = prompt("Escriba que producto desea agregar o modificar: \n Asado, Vacio, Cerdo, Chorizo, Achuras. \n \n O Ingrese SALIR para finalizar").toLowerCase();
};


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