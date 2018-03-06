
var objetoJS = {
    nombre: "Miguel",
    edad: 30
};

console.log("Objeto literal", objetoJS);

var jsonString = JSON.stringify(objetoJS);

console.log(jsonString);


var objetoDesdeJson = JSON.parse(jsonString);

console.log(objetoDesdeJson);

console.log(objetoDesdeJson.nombre);
console.log(objetoDesdeJson.edad);















