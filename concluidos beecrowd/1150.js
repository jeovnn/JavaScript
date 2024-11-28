let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let x = parseInt(lines[0])
let z = 0
let c = 0

for (let i = 1; i < lines.length; i++) {
    let valor = parseInt(lines[i])
    if (valor > x) {
        z = valor
    }
}

let soma = x
while(soma < z) {
    soma += x+1
    c ++
}

console.log(c)