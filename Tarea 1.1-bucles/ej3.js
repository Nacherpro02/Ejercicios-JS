//3. Algoritmo que nos calcule la suma de los N primeros números naturales. 
// N se leerá por teclado.

let prompt = require('prompt-sync')();
let n = Number(prompt("Introduce n: "));
let suma = 0;
for (let i = 1; i<=n; i++){
    suma+=i;
}
console.log(`La suma es: ${suma}`)