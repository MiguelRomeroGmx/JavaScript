

var Persona = function () {
    this.nombre = "Juan",
    this.apellido = "Perez",
    this.edad = 18;
};

var juan = new Persona();

Persona.prototype.direccion = "Mexico";

for (prop in juan) {
    console.log(prop, ":", juan[prop]);
    
}



for_principal:
for (let i = 0; i <=5; i++) {
    console.log("i", i);
    
    for_secundario:
    for (let j = 0; j <= 5; j++) {
        console.log("j", j);
        for (let x = 0; x <= 5; x++) {
            console.log("x", x);
            break for_principal;
            
        }
        
    }
    
}







