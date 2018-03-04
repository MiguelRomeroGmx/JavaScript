
function determinaDato(a) {
    if (a === undefined) {
        console.log("A es undefined");
    }

    if (typeof a === "number") {
        console.log(a + " es un numero");
    }

    if (typeof a === "string") {
        console.log(a + " es un texto");
    }

    if (typeof a === "object") {
        console.log(a.nombre + " es un objeto");
    }
}


determinaDato({nombre: "Miguel"});
