let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let linhas = input.split('\n');

let A = parseFloat(linhas.shift());
let B = parseFloat(linhas.shift());
let C = parseFloat(linhas.shift());

let MEDIA = (2 * A + 3 * B + 5 * C) / 10;

console.log(`MEDIA = ${MEDIA.toFixed(1)}`);
