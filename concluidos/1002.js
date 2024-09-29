let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let linhas = input.split('\n');

const pi = 3.14159;
let raio = parseFloat(linhas.shift());

let area = pi * raio * raio;

console.log(`A= ${area.toFixed(4)}`);











