//8. Algoritmo que lea un número entero (lado) y a partir de él 
// cree un cuadrado de asteriscos con ese tamaño.

let prompt = require('prompt-sync')();
let n = Number(prompt("Introduce el numero de lado: "));

for(let i=0;i<n;i++){
    console.log("*".repeat(n))
}