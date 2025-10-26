/*
Una tienda ofrece un descuento del 15% sobre el total de la compra durante el mes de octubre.
Dado un mes y un importe, calcular cuál es la cantidad que se debe cobrar al cliente.
*/

let prompt = require("prompt-sync")();
let mes = prompt("Introduzca el mes: ");
let importe = Number(prompt("Introduzca el importe total: "));

if (mes === "Octubre") {
  console.log("total con descuento:", importe - importe * 0.15);
} else {
  console.log("Total:",importe);
}