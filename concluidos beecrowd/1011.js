let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let R = +(lines.shift());

const pi = 3.14159;

let volume = pi * (4/3.0) * (R*R*R);

console.log(`VOLUME = ${volume.toFixed(3)}`);

