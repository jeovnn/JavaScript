let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let valor = lines.shift()
let [a,b,c] = []
for (let i = 1; i <= valor; i++) {
    a = i 
    b = i * i
    c = i * i * i
    console.log(a,b,c)
    console.log(a,b+1,c+1)
}