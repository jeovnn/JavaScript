let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let numeros = input.split(' ').map(Number);
let numerosOrdenados = [...numeros].sort((a, b) => a - b);

numerosOrdenados.forEach(num => console.log(num));

console.log();

numeros.forEach(num => console.log(num));