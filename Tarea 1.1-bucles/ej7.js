//7. Algoritmo que lea números enteros hasta teclear 0, y nos muestre 
// el máximo, el mínimo y la media de todos ellos.

let prompt = require("prompt-sync")();

let n = 1;
let max = -Infinity;
let min = Infinity;
let suma = 0;
let contador = 0;
do{
    n = Number(prompt("Introduce el numero: "));
    if(n!=0){
        if(n>max){
            max = n;
        }
        if(n<min){
            min = n;
        }
        suma += n;
        contador++;
    }
}while(n != 0)

console.log(`El maximo es: ${max}, el minimo es: ${min} y la media es: ${suma/contador}`)