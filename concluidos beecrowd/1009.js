let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

const A = (lines.shift());
const B = parseFloat(lines.shift());
let C = parseFloat(lines.shift());
let salario = B + (C*0.15);

console.log(`TOTAL = R$ ${salario.toFixed(2)}`);

