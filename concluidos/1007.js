let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let linhas = input.split('\n');

let A = parseInt(linhas.shift());
let B = parseInt(linhas.shift());
let C = parseInt(linhas.shift());
let D = parseInt(linhas.shift());

let diferenca = A*B - C*D;

console.log (`DIFERENCA = ${diferenca}`)

