
var fecha = new Date(2018, 2, 5);

// console.log(fecha);

// fecha.setDate(25);

// console.log(fecha);

Date.prototype.sumarDias = function (dias) {
    this.setDate(this.getDate() + dias );
    return this;
}


console.log(fecha);
console.log(fecha.sumarDias(5));





