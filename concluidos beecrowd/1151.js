let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let n = parseInt(lines[0])
let fib = [0,1]

for (let i = 2; i < n; i++) {
    fib[i] = fib[i-1] + fib[i-2]
}

let resultado = ''
for (let i = 0; i < n; i++) {
    resultado += fib[i]
    if (i < n - 1) {
        resultado += ' '
    }
}

console.log(resultado)