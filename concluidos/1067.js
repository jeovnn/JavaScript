let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let x = parseInt(lines);
let valorOriginal = x;

for (x = 1; x < (valorOriginal+1); x+=2){
    console.log(x)
}