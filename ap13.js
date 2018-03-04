
function crearProducto(nombre, precio) {
    nombre = nombre || "sin nombre";
    precio = precio || 0;

    console.log("Producto: ", nombre, "Precio: ", precio);
}

function crearProducto100(nombre) {
    crearProducto(nombre, 100);
}

function crearproductoCamisa(precio) {
    crearProducto("Camisa", precio);
}

crearProducto("Lapiz");
crearProducto100("Corrector");
crearproductoCamisa(70);