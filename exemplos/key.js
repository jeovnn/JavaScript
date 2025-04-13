let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let qtde = 0
let vetor = lines.shift()

vetor = vetor.split(' ')
console.log(vetor)

for (const key of vetor){
    if (vetor[key] > 5) {
        qtde ++
    }
}
console.log(qtde)