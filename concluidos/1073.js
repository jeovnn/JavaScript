let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let n = parseInt(lines);
let n2 = n;

for (n = 2; n < (n2+1); n+=2) {
    console.log(`${n}^2 = ${n*n}`);
} 
