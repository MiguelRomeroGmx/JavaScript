

var arr = [
    true,
    {
        nombre:"MIGUEL",
        apellido:"ROMERO"
    },
    function () {
        console.log("dentro de un arreglo");
    },
    function (persona) {
        console.log(persona.nombre + " " + persona.apellido);
    },
    [
        "Fernando",
        "Carlos",
        "Hernando",
        "Melisa",
        [
            "Juan",
            "Pedro",
            "Ana"
        ]


    ]
];

console.log(arr);
console.log(arr[0]);
console.log(arr[1].nombre + " " + arr[1].apellido);

arr[2](); //Invocando a la funcion

arr[3](arr[1]);

console.log( arr[4][4][2]);