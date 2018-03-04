var size = 18;
var grid = '';

for (let index = 0; index < size ; index++) {
    for (let x = 0; x < size; x++) {
        if(( x + index ) % 2 === 0) {
            grid += ' ';
        } else {
            grid += '#';
        }
        
    }
    grid += '\n';
}

console.log(grid);