let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let n = parseInt(lines[0])
let fatorial = 1;

for(let i = 1; i <= n; i++) {
    fatorial *= i
}

console.log(fatorial)