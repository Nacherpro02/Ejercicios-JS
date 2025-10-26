/*
Solicita por teclado tres números;
si el primero es negativo, muestra el producto de los tres y si no lo es, muestra la suma.
*/

let prompt = require('prompt-sync')();

let a = Number(prompt("Escribe el numero a: "));
let b = Number(prompt("Escribe el numero b: "));
let c = Number(prompt("Escribe el numero c: "));

console.log(a < 0 ? a * b * c : a + b + c);
