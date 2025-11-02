let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let i = 0;
let diferenca = 0;

while (i < lines.length) {
    if (lines[i].trim() === '') { // ignora linha em branco
        i++;
    }

    let [a, b] = lines[i].split(' ').map(Number);

    if (a > b) {
        diferenca = a - b;
    } else if (b > a) {
        diferenca = b - a;
    } else {
        diferenca = 0;
    }

    console.log(diferenca);
    i++;
}
