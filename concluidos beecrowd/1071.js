let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let a = parseInt(lines[0]);
let b = parseInt(lines[1]);
let i = 0;
let soma = 0;

if (a > b) {
    for (i = b + 1; i < a; i++) {
        if (i % 2 !== 0) {
            soma += i;
        }
    }
} else if (b > a) {
    for (i = a + 1; i < b; i++) {
        if (i % 2 !== 0) {
            soma += i;
        }
    }
}

console.log(soma)