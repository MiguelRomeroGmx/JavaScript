// var a = 30;
// function primeraFuncion() {
//     var a = 20;
//     console.log(a);


// }

// primeraFuncion();

function imprimir(persona) {

    // apellido = apellido || "xxx";

    // if (apellido === undefined) {
    //     apellido ="xxx";
    //     }

    
    // console.log(nombre + " " + apellido);
    console.log(persona.nombre + " " + persona.apellido);
}

// imprimir("Juan","Perez");

imprimir({
    nombre: "Juan",
    apellido: "Perez"
});