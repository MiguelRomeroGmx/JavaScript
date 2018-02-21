
// function imprimir() {
//     for (var i = 0; i< 8000; i++) {
//         console.log("imprimio");       
//     }
    
// }

// function presionoClick() {
//     console.log("click en boton");
// }

// imprimir();

var nombre ="Juan"; // Variable

//Notacion de puntos
// Objeto
var persona = {
    nombre: "pedro",
    edad: 25,
    direccion:{                 // objetos dentro de objetos
        pais: "Mexico",
        ciudad: "Tabasco",
        edificio: {
            nombre:  "Edificio A",
            telefono: "9849389439"
        }
    }

}

persona.direccion.codigoPostal = 86611;  // Agregar un dato a un objeto 
console.log(persona.direccion.codigoPostal);
console.log(persona.direccion.edificio.telefono);

var edificio = persona.direccion.edificio;
edificio.noPiso = "8vo piso";

console.log(persona);



// Notacion de corchetes



console.log(persona["direccion"]["edificio"]["telefono"]);

var campo ="edad";

console.log(persona[campo]);