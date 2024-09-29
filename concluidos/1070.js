let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let valor = parseInt(lines);
let valorOriginal = valor;

if (valor % 2 === 0) {
    for (valor += 1; valor < (valorOriginal + 12); valor+= 2) {
        console.log(valor);
    }
} else if (valor % 2 !== 0) {
    for (valor; valor < (valorOriginal + 12); valor+= 2) {
        console.log(valor);
    }
}
