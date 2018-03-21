console.log("listo");

var arreglo1;
var arreglo2;
var datos;

arreglo1 = [400, 300, 200, 100];

console.log(arreglo1);
datos = arreglo1[1];

console.log(datos);

arreglo2 = arreglo1.push(600);

console.log(arreglo1);

// for (let index = 0; index < 5; index++) {
//     console.log(index);
//     const element = arreglo1[index];
//     console.log(element);
// }

arreglo1.push(700);

for (let index = 0; index < 20; index++) {
    arreglo1.push(100*index);
    
}

    
for (let index = 0; index < arreglo1.length; index++) {
    const element = arreglo1[index];
    console.log(index);
    
    console.log(element);
    
}




