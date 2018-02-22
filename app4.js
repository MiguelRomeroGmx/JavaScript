



function Persona(nombre,apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = 25;
    this.nombreCompleto = function () {
        return this.nombre + " " + this.apellido + "(" + this.edad + ")";
    }
}

var juan = new Persona("juan", "perez");

console.log(juan);
console.log (juan.nombreCompleto());





