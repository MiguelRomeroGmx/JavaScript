var vj = document.getElementById("villajuego");
var papel = vj.getContext("2d");
var mapa = "tile.png";

var xVaca, yVaca, xCerdo, yCerdo;


var fondo = {
    url: "tile.png",
    cargaOk: false
};

var vaca = {
    url: "vaca.png",
    cargaOk: false
};

var cerdo = {
    url: "cerdo.png",
    cargaOk: false
};

var pollo = {
    url: "pollo.png",
    cargaOk: false
};


var cantidadV = aleatorio(5, 10);
var cantidadC = aleatorio(5, 10);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);



function cargarFondo() {
    fondo.cargaOk = true;
    dibujar();

}

function cargarVacas() {
    vaca.cargaOk = true;
    dibujar();

}

function cargarCerdos() {
    cerdo.cargaOk = true;
    dibujar();

}



function dibujar() {

    if (fondo.cargaOk) {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if (vaca.cargaOk && cerdo.cargaOk) {

        console.log(cantidadV);

        for (var v = 0; v < cantidadV; v++) {
            var x = aleatorio(0, 7);
            var y = aleatorio(0, 7);
            xVaca = x * 60;
            yVaca = y * 60;
            // xCedo = aleatorio(0, 7);
            // yCerdo = aleatorio(0, 7);
            xCerdo = y * 60;
            yCerdo = x * 60;



            papel.drawImage(vaca.imagen, xVaca, yVaca);
            papel.drawImage(cerdo.imagen, xCerdo, yCerdo);
        }

    }


}






function aleatorio(min, maxi) {
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}