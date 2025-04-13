let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let respostacerta = parseInt(lines.shift())
let tentativas = lines.join(' ').trim().split(/\s+/).map(Number);
let acertos = 0

for (let i = 0; i < 5; i++){
    if (tentativas[i] === respostacerta){
        acertos++
    }
}

console.log(acertos)