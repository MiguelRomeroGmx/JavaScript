
var arr = [5,4,3,2,1];
console.log(arr);

console.log(arr[0], arr[4], arr[5]);

arr.reverse();
console.log(arr);

arr = arr.map( function (elem) {
    elem *= elem;
    return elem;
});

console.log(arr);

arr = arr.map(Math.sqrt);

console.log(arr);

arr = arr.join('#');
console.log(arr);

arr = arr.split('#');
console.log(arr);

 
arr.push("6");  //coloca el dato al final del arreglo
console.log(arr);


arr.unshift("0"); //Coloca el dato al inicio del arreglo
console.log(arr);


console.log(arr.toString());

var deleted = arr.pop();
console.log(arr, deleted);

arr.splice(1, 1, "10");
console.log(arr);

arr = arr.slice(0,2);
console.log(arr);