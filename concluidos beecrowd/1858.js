let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let n = parseInt(lines.shift());
let valores = lines.shift().split(" ").map(Number);

let menor = valores[0];
let posMenor = 1;

for (let i = 1; i < n; i++){
    if (valores[i] < menor) {
        menor = valores[i];
        posMenor = i + 1;
    }
}
console.log(posMenor);

