let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let qtde = parseInt(lines[0])
let n = []

for (let i = 0; i < (qtde -1); i++) {
    n.push("Ho")
}
n.push("Ho!")

console.log(n.join(' '))