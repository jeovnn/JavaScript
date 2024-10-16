let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

const operacao = lines.shift().trim();
const tamanho = 12;
let matriz = [];
let soma = 0;
let contador = 0;

for (let i = 0; i < tamanho; i++) {
    matriz[i] = [];
    for (let j = 0; j < tamanho; j++) {
        matriz[i][j] = parseFloat(lines.shift());
    }
}

for (let i = 0; i < Math.floor(tamanho/2) ; i++) {
    for (let j = i + 1; j < tamanho - 1 - i; j++) {
        soma += matriz[i][j];
        contador++;
    }
}

if (operacao === 'S') {
    console.log(soma.toFixed(1));
} else if (operacao === 'M') {
    console.log((soma / contador).toFixed(1));
}