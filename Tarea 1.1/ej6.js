/*
Un colegio desea saber qué porcentaje de niños y qué porcentaje de
niñas hay en el curso actual. Diseñar un algoritmo para este propósito.
*/

let prompt= require("prompt-sync")();
let niños = Number(prompt("Introduzca número de niños: "));
let niñas = Number(prompt("Introduzca número de niñas: "));

let alumnos = niños + niñas;

console.log(`Porcentaje de niños: ${niños * 100 / alumnos} y porcentaje de niñas: ${niñas * 100 / alumnos}`);