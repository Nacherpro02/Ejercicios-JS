/*
Realizar algoritmo que nos diga si una persona puede acceder a cursar un ciclo formativo de grado superior o no.
Para acceder a un grado superior, si se tiene un título de bachiller, en caso de no tenerlo,
se puede acceder si hemos superado una prueba de acceso.
*/

let prompt = require("prompt-sync")();
let tieneTitulo = prompt("¿Tienes bachiller? (S/N): ");

if (tieneTitulo === "S") {
    console.log("Puedes acceder al grado superior");
} else {
    let pregunta = prompt("¿Cuánto has sacado en la prueba de acceso? (0-10 o No lo he hecho): ")
    if (Number(pregunta) >= 5) {
        console.log("Puedes acceder al grado superior");
    } else if (Number(pregunta) < 5) {
        console.log("No puedes acceder al grado superior");
    } else { 
        console.log("No puedes acceder al grado superior")
}
}