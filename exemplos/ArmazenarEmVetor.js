let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let numbers = lines.join(' ').trim().split(/\s+/).map(Number);

console.log(numbers); 

//quando o file é em uma linha só
//quando é um valor em cada linha se usa um for