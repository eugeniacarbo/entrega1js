let nombre = prompt("Holaa, como es tu nombre?");


let edad = parseInt(prompt("Hola " + nombre + " Cuantos años tienes?"));


let cantidad = prompt("Cuantas personas van a ser, indica un numero del 1 al 6 ?");

if (cantidad <= 6) {
    alert("Tu estadia saldrá $9000 por noche.");
} else if (capacidad > 6) {
    alert("No contamos con esa capacidad");
}

let noches = 40;
let totalReservas = 0;


while (noches >= 40) {
    totalReservas = parseInt(prompt("Cuantas noches desas reservar?"));

    if (totalReservas > noches) {
        alert("No disponemos de tantas noches");
    }
    noches = noches - totalReservas;

    console.log(`Queda un total de ${noches} disponibles`);
}

alert("Calculemos cuanto sale tu estadía");

let costo1 = parseInt(prompt("Confirmanos cuantas personas son?"));
let costo2 = parseInt(prompt("Confirmanos cuantos dias se van a quedar?"));



let costoNoche = 1500;

function costo(costo1, costo2, costoNoche) {

    costo = costo1 * costo2 * costoNoche;
}


function mostrar(mensaje) {
    console.log(mensaje)
}
costo(costo1, costo2, 1500);
mostrar(costo);



alert(`Su reserva tendrá un costo de $ ${mostrar} `);