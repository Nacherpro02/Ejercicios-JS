//4. Se pide representar el algoritmo que nos calcule la suma de los N primeros números pares. 
// Es decir, si insertamos un 5, tendremos la suma de 2+4+6+8+10.

let prompt = require('prompt-sync')();
let n = Number(prompt("Introduce n: "));
let s = 2;
let suma = 0;
for(let i = 0;i<n;i++){
    suma+=s;
    s+=2;
}
console.log(`La suma es: ${suma}`)