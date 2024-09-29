let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let linhas = input.split('/n');

let x = +linhas.shift();
let y = +linhas.shift();

console.log(`X = ${x + y}`);

