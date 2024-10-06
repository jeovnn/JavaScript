let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let maior = parseInt(lines[1]);
let posicao = 1;
let valor = 0;

for (i = 1; i < 100; i++) {
    valor = parseInt(lines[i]);
    if (valor > maior) {
        maior = valor;
        posicao = i + 1;
    }
}

console.log(maior)
console.log(posicao)