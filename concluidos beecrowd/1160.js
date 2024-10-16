let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

const T = parseInt(lines.shift());  // Número de casos

for (let i = 0; i < T; i++) {
    let [A, B, porcentagemA, porcentagemB] = lines[i].split(' ').map(Number);
    let anos = 0;

    while (A <= B && anos <= 100) {
        A += Math.floor((A * porcentagemA) / 100);
        B += Math.floor((B * porcentagemB) / 100);
        anos++;
    }

    if (anos > 100) {
        console.log("Mais de 1 seculo.");
    } else {
        console.log(`${anos} anos.`);
    }
}