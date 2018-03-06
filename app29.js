
function evento(arg) {
    console.log("click");
    console.log(arg);
    
}

var objeto = document.getElementById("objDemo");

// objeto.addEventListener("keypress", evento);

objeto.addEventListener("click", evento);