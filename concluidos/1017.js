let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let tempo = parseInt(lines.shift());
let velocidade = parseInt(lines.shift());

let distancia = tempo*velocidade;

let resultado = distancia/12;

console.log(resultado.toFixed(3));




// 10h  85km/h 