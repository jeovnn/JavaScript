let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let a = parseInt(lines.shift());
let b = parseInt(lines.shift());
let c = parseFloat(lines.shift());

let salario = b * c 

console.log(`NUMBER = ${a}`);
console.log(`SALARY = U$ ${salario.toFixed(2)}`);

