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



function crearPersona(nombre, apellido) {
    return{
        nombre: nombre,
        apellido: apellido
    }
}

var persona = crearPersona("María", "Pérez");

// 

function creaFuncion() {
    return function (nombre) {
        console.log("Me creo " + nombre)
        return function(){
            console.log("Segunda funcion")
        }
    }
}

var nuevaFuncion = creaFuncion();


var segundaFuncion =  nuevaFuncion(persona.nombre);

segundaFuncion();




