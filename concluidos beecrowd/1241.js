let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

const n = parseInt(lines.shift());

for (let i = 0; i < n; i++) {
    let [a, b] = lines[i].trim().split(' ');

    if (a.endsWith(b)) {
        console.log('encaixa');
    } else {
        console.log('nao encaixa');
    }
}