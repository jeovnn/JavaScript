let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let [cachorros, participantes] = lines.shift().split(" ").map((x) => parseFloat(x))

let media = cachorros/participantes
console.log(media.toFixed(2))