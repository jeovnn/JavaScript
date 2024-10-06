let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let linhas = input.split('\n');

let A = parseFloat(linhas.shift());
let B = parseFloat(linhas.shift());

let media = (3.5 * A + 7.5 * B) / 11;

console.log(`MEDIA = ${media.toFixed(5)}`);




