let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let N = new Array(20); // Cria um vetor com 20 posições

for (let i = 0; i < 20; ++i) {
  N[i] = parseInt(lines.shift());
}

for (let i = 0; i < 10; ++i) {
  [N[i], N[19 - i]] = [N[19 - i], N[i]];
}

for (let i = 0; i < 20; ++i) {
  console.log(`N[${i}] = ${N[i]}`);
}

