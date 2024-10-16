let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let s = 1;
let divisor = 2;

for (let i = 3; i <= 39; i+= 2) {
    s += i/divisor
    divisor *= 2
}
console.log(s.toFixed(2))
