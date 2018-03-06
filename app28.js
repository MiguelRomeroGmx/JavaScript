

// setTimeout(function () {
//     console.log("Paso un segundo");
    
// }, 1000)


var segundos = 0;

var intervalo = setInterval(function () {
    segundos ++;
    console.log("seg", segundos);
    
    if (segundos === 3) {
        clearInterval(intervalo);
    }
}, 1000)







