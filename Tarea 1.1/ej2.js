/*
Se pide un algoritmo que lea dos números desde teclado, calculando 
y escribiendo en pantalla el valor de su suma, resta, producto y división.
*/

let prompt = require('prompt-sync')();

let a = Number(prompt("Escribe el numero a: "));

let b = Number(prompt("Escribe el numero b: "));

console.log(`La suma es: ${a+b}, la resta: ${a-b}, el producto: ${a*b} y la division: ${a/b}`)