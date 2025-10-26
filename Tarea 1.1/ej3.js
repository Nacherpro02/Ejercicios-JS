/*
Se pide realizar un algoritmo que lea dos números e indique el mayor, o si son iguales.
*/

let prompt = require('prompt-sync')();

let a = Number(prompt("Escribe el numero a: "));
let b = Number(prompt("Escribe el numero b: "));

if (a === b) {
    console.log("Los dos son iguales")
}else if(a > b){
    console.log(`El numero a:${a} es mayor`)
}else{
    console.log(`El numero b:${b} es mayor`)
}

