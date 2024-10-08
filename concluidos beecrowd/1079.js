let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let n = parseInt(lines[0])

for (let i = 1; i <= n; i++) {
    let valores = lines[i].split(' ')
    let a = parseFloat(valores[0])
    let b = parseFloat(valores[1])
    let c = parseFloat(valores[2])
    let media = (a * 2 + b * 3 + c * 5)/10
    console.log(media.toFixed(1))
}
