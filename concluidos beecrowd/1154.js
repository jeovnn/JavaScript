let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let soma = 0
let qtde = 0
for (let i = 0; i < lines.length; i++) {
    if (lines[i] < 0) break;
    let valores = parseInt(lines[i])
    soma += valores
    qtde ++
}

console.log((soma/qtde).toFixed(2))