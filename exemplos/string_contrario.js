let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let result = lines.join(" ").split("");
let nome = lines.join(" ").split(" ");
let contrario = "";

console.log(nome.join());

for (let i = result.length-1; i >= 0; i--){
    contrario+=(result[i])
}

console.log(contrario);