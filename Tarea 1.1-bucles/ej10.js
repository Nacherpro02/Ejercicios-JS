//10. Realiza un reloj digital que nunca pare. También 
// debes hacer que espere un segundo real para darle más realismo.

let hora = 0;
let min = 0;
let seg = 55;

let horaStr = "";
let minStr = "";
let segStr = "";

setInterval(() => {
    seg++;
    min +=Math.trunc(seg/60);
    hora += Math.trunc(min/60);
    seg = seg % 60;
    min = min % 60;
    hora = hora % 24;
    if(seg < 10){
        segStr = `0${seg}`;
    }else{
        segStr = `${seg}`;
    }
    if(min < 10){
        minStr = `0${min}`;;
    }else{
        minStr = `${min}`;;
    }
    if(hora < 10){
        horaStr = `0${hora}`;;
    }else{
        horaStr = `${hora}`;;
    }
    console.clear();
    console.log(`${horaStr}:${minStr}:${segStr}`)
}, 1000);