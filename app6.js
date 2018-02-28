

function Persona() {
    this.nombre     = "Miguel";
    this.apellido   = "Romero";
    this.edad       = 30;
    this.pais       ="Mexico";
}

Persona.prototype.imprimirInfo = function () {
    console.log(this.nombre + " " + this.apellido + "(" + this.edad + ")" );
}

Persona.prototype.pais = "Mexico";


var mig = new Persona();
 mig.imprimirInfo();

 console.log(mig);
 console.log(mig.pais);