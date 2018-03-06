

function crearCookie(nombre, valor) {

    valor = escape(valor);

    var hoy = Date();
    hoy.setMonth(hoy.getMont() + 1);

    document.cookie = nombre + "=" + valor + ";expires=" + hoy.toUTCString() + ";"; 
}


crearCookie("nombre", "Miguel");


function borrarCookie(nombre) {
    var hoy = Date();
    hoy.setMonth(hoy.getMont() - 1);

    document.cookie = nombre + "=" + valor + ";expires=" + hoy.toUTCString() + ";"; 
}



// var cookies = document.cookie;

console.log(cookies);



