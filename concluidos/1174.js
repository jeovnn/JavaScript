let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let vetor = []

for (let i = 0; i < 100; i++ ) {
    vetor[i] = parseFloat(lines[i])
    if (vetor[i] <= 10) {
        console.log(`A[${i}] = ${vetor[i].toFixed(1)}`)
    }
}