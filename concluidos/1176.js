let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let n = parseInt(lines[0])
let max = 60
let fib = [0,1]

for (let i = 2; i <= max; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]
} 

for (let i = 1; i <= n; i++) {
    let vetores = parseInt(lines[i])
    console.log(`fib(${vetores}) = ${fib[vetores]}`)
}
