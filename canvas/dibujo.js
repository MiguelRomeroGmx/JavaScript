var texto = document.getElementById("t_lineas");
var btn = document.getElementById("boton");
btn.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");




dibujarLinea(color2, 299, 0, 299, 299);
//dibujarLinea(color2, 1, 299, 299, 299);


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

function dibujoPorClick()
{
	var x = parseInt(texto.value);
	//alert("Entendido");
	var lineas = x;
var l = 0;
var xi, yf;
var color2 = '#FAA';
var espacio = ancho/lineas;


for(l = 0; l < lineas; l++)

{
xi = espacio * l;
//yf = 10 * (l + 1);
yf = espacio * l;
dibujarLinea(color2, xi, 0, 300, yf);


}

}