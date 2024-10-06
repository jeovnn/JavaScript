let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let media = 0;
let positivos = 0;
let soma = 0;

for(let i = 0; i < 6; ++i){
    let numero = parseFloat(lines.shift());
    if (numero > 0) {
        ++positivos;
        soma += numero;
    }
}

console.log(`${positivos} valores positivos`);
console.log((soma/positivos).toFixed(1));