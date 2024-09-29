let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let tempo = +(lines.shift());

let horas = Math.floor(tempo/3600);
tempo %= 3600;
let minutos = Math.floor(tempo/60);
tempo %= 60;

console.log(`${horas}:${minutos}:${tempo}`);