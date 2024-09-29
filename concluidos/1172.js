let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let X = [];

for (let i = 0; i < lines.length; i++) {
    X[i] = parseInt(lines[i])
    if (lines[i] <= 0) {
        X[i] = 1;
    }
    console.log(`X[${i}] = ${X[i]}`)
}



