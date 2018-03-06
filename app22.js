

var carro = {
    color: "Blanco",
    marca: "Mazda",
    imprimir: function () {
        var salida = this.marca + "-" + this.color;
        return salida;
    }
}

var carro2 = {
    color: "rojo",
    marca: "toyota"
}

console.log(carro.imprimir());

var logCarro = function (arg1, arg2) {
    console.log("Carro: ", this.imprimir());
    console.log("Argumentos: ", arg1, arg2);
    console.log("==============================");
    
    
    
}


var logModelCarro = logCarro.bind(carro);

logModelCarro("abc", "xyz");

logModelCarro.call(carro, "123", "456");
logModelCarro.apply(carro, ["123", "456"]);


// Funciones prestadas

console.log(carro.imprimir.call(carro2));
 


