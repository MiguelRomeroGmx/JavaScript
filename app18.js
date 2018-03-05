
var hoy = new Date();
var fMili = new Date(1);
var fFija = new Date(2016, 10);


console.log(hoy);
console.log(fMili);
console.log(fFija);




console.log(hoy.getFullYear() + 1);


var inicio = new Date();

for (let i = 0; i < 15000; i++) {
    console.log("Algo...");
    
}


var fin = new Date();

var duracion =  fin.getTime() - inicio.getTime();
console.log(duracion, "milisegundos");
console.log(duracion/1000, "segundos");

