/*
Leer tres números que denoten una fecha (día, mes, año).
Comprobar que es una fecha válida. Si no es válida escribir
un mensaje de error. Si es válida escribir la fecha cambiando
el número del mes por su nombre. Ej. si se introduce 1 2 2006,
se deberá imprimir “1 de febrero de 2006”. El año debe ser mayor que 0.
*/

let prompt = require('prompt-sync')();

let dia = Number(prompt("Escribe el dia: "));
let mes = Number(prompt("Escribe el mes: "));
let año = Number(prompt("Escribe el año: "));

if (dia < 0 || dia > 31){
    console.log("Error: Dia invalido")
}else if (mes < 0 || mes > 12){
    console.log("Error: Mes invalido")
}else if (año < 0){
    console.log("Error: Año invalido")
}else {
    switch (mes) {
        case 1:
            mes = "enero"
            break;   
        case 2:
            mes = "febrero"
            break; 
        case 3:
            mes = "marzo"
            break;
        case 4:
            mes = "abril"
            break; 
        case 5:
            mes = "mayo"
            break; 
        case 6:
            mes = "junio"
            break;   
        case 7:
            mes = "julio"
            break; 
        case 8:
            mes = "agosto"
            break;
        case 9:
            mes = "septiembre"
            break; 
        case 10:
            mes = "octubre"
            break;
        case 11:
            mes = "noviembre"
            break; 
        case 12:
            mes = "diciembre"
            break; 
    }
    console.log(`Fecha: ${dia} de ${mes} de ${año}`)
}