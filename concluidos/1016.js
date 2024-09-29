let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let distancia = parseInt(lines.shift());
const x = 70;
const y = 90;
let time = 2*distancia;

console.log(`${time} minutos`);