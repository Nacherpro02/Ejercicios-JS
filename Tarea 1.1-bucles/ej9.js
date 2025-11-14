//9. Modifica el algoritmo anterior para que se muestre el interior del cuadrado hueco.

let prompt = require('prompt-sync')();
let n = Number(prompt("Introduce el numero de lado: "));

console.log("*".repeat(n))
for(let i=0;i<n-2;i++){
    console.log("*"+" ".repeat(n-2)+"*")
}
console.log("*".repeat(n))