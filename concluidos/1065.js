let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let i = 0;
let pares = 0;
let numeros = 0;

for (i = 1; i < 6; ++i) {
    numeros = parseInt(lines.shift().trim());
    if (numeros % 2 === 0) ++pares;
}
console.log(`${pares} valores pares`);



