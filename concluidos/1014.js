let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let a = +(lines.shift());
let b = parseFloat(lines.shift());

let consumo = a/b;

console.log(`${consumo.toFixed(3)} km/l`);

