//5. Dada una secuencia de números leídos por teclado, que acabe con un –1,
// por ejemplo: 5,3,0,2,4,4,0,0,2,3,6,0,……,-1; Realizar el algoritmo que
// calcule la media aritmética. Suponemos que el usuario no insertará números negativos.

let prompt = require('prompt-sync')();
let n = 0;
let suma = 0;
do{
    n = Number(prompt("Introduce n: "))
    if(n!=-1){
        suma+=n;
    }
}while(n != -1)
console.log(`La suma es: ${suma}`)
