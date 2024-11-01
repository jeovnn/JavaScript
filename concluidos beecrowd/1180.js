let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let n = parseInt(lines[0])
let posicao = 0
let elementos = lines[1].split(' ').map(Number)
let menor = Math.min(...elementos)

for (let i = 0; i < n; i++) {
    if (elementos[i] === menor) {
        posicao = i
    }
}

console.log(`Menor valor: ${menor}`)
console.log(`Posicao: ${posicao}`)