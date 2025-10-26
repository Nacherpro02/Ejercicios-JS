/*
Realizar un algoritmo que dado un número entero, visualice en pantalla si es par o impar. En el caso de ser 0,
debe visualizar “el número no es par ni impar” (para que un número sea par, se debe dividir entre dos y que su resto sea 0).
*/

let prompt = require("prompt-sync")();
let número = Number(prompt("Introduzca el número: "));

if (número === 0) {
  console.log(número, "el número no es par ni impar");
} else if (número % 2 === 0) {
  console.log(número, "es par");
} else {
  console.log(número, "es impar");
}