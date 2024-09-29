let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let linhas = input.split('\n');

let A = parseInt(linhas.shift());
let B = parseInt(linhas.shift());

console.log(`PROD = ${A*B}`);   


