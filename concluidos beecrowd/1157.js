let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let n = parseInt(lines)
for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
        console.log(i)
    }
}