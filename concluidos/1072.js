let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let n = parseInt(lines.shift())
let valores = [];
let dentro = 0
let fora = 0

for(let i = 0; i < n; i++) {
    valores[i] = parseInt(lines[i])
    if(valores[i] >= 10 && valores[i] <= 20) {
        dentro += 1;
    } else {
        fora += 1
    }
}

console.log(`${dentro} in`)
console.log(`${fora} out`)


//console.log(n)