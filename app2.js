function obtenerAleatorio() {
    return Math.random();
}


function obtenerNombre() {
    return "Miguel";
}

function esMayor05() {
    
    if (obtenerAleatorio() > 0.5 ) {
        return true;
    }
    else{
        return false;
    }

}


// console.log( esMayor05() );

if (esMayor05()) {
    console.log("Es mayor que 0.5");
}
else{
    console.log("Es menor que 0.5");    
    }