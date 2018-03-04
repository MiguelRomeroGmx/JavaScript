var b = "Romero";

var a  = new String("Juan Carlos");
console.log(a);

console.log(a.toLocaleUpperCase());
console.log(a.toLocaleLowerCase());

var i = a.indexOf("n");
console.log("La letra esta en: ", i);

i = a.lastIndexOf("o");
console.log("La letra esta en: ", i);

var nombre = a.substr(0, a.indexOf(" "));
console.log(nombre);


var split = a.split(" ");
console.log(split);
console.log(split.length);