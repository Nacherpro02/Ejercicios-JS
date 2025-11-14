//6.  Teniendo en cuenta que la clave es “eureka”, escribir un algoritmo
// que nos pida una clave. Solo tenemos 3 intentos para acertar, si fallamos
// los 3 intentos nos mostrará un mensaje indicándonos que hemos agotado esos 3 intentos.
// Si acertamos la clave, saldremos directamente del programa.

let prompt = require('prompt-sync')();
let clave = "eureka";
let intentos = 3;
do{
    clave_user = prompt("Introduce la clave: ");
    if(clave === clave_user){
        console.log("Has encontrado la clave!");
        intentos = 0;
    }else{
        intentos--;
        if(intentos===0){
            console.log("Ya no te quedan intentos")
        }else{
        console.log(`Clave incorrecta te quedan ${intentos} intentos`)
        }
    }
}while(intentos>0)
