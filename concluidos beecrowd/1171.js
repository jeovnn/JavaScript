let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let n = parseInt(lines[0]);
let array = [];
let contagem = {};

for (let i = 1; i <= n; i++) {
    let valor = parseInt(lines[i]);
    array.push(valor);
    contagem[valor] = (contagem[valor] || 0) + 1;
}

array = Array.from(new Set(array)).sort((a, b) => a - b);

for (let valor of array) {
    console.log(`${valor} aparece ${contagem[valor]} vez(es)`);
}

