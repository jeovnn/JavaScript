let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let [a,b] = lines.shift().split(" ").map((x) => parseFloat(x));
let hora = 0;

if (a > b) {
    hora = 24 - a + b;
} else if (a < b) {
    hora = b - a;
} else {
    hora = 24;
}

console.log (`O JOGO DUROU ${hora} HORA(S)`);
