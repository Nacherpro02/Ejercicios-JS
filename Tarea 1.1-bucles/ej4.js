// 4. Se pide representar el algoritmo que nos calcule la suma de los N primeros
// números pares. Es decir, si insertamos un 5, tendremos la suma de 2+4+6+8+10.

let prompt = require('prompt-sync')();
let n = Number(prompt("Escribe el valor de n: "));

// Con While
let i = 0;
let a = 1;
let acumulador = 0;

while(i < n){
    if(a % 2 == 0){
        acumulador += a;
        i++
    }
    a++;

}

console.log(`La suma es: ${acumulador}`);

//Con For

let x = 0;
let acc = 0;

for(let b = 1; x < n; b++){
    if (b % 2 == 0){
        acc += b;
        x++;
    }
}

console.log(`La suma es: ${acc}`)