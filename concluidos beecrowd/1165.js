let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let n = lines[0]

for (let i = 1; i <= n; i++) {
    lines[i] = parseInt(lines[i])
    console.log(lines[i])
    if (lines[i] / 2 === 0 || lines[i] / 3 === 0 || lines[i] / 5 === 0) {
        console.log(lines[i], "nao eh primo")
    } else if (lines[i] / lines[i] === 0) {
        console.log(lines[i], "eh primo")
    }
}