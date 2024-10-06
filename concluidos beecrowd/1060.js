let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let positivos = 0;
for(let i = 0; i < 6; ++i){
    let numero = parseFloat(lines.shift().trim());
    
    if (numero > 0)  ++positivos;
}
console.log(`${positivos} valores positivos`);

