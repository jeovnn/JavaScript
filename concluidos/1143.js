let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let n = lines.shift()

for (let i = 1; i <= n; i++) {
    let quadrado = i*i;
    let cubo = i*i*i
    console.log(i,quadrado,cubo)
}
