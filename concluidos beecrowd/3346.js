let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let [a,b] = lines.shift().trim().split(' ')

let flutuacao = ((1+a/100)*(1+b/100)-1)*100
console.log(flutuacao.toFixed(6))