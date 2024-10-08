let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let n = 0;

while (true) {
    let x = parseInt(lines[n++])
    if (x === 0) break 
    let resultado = []
    for (let i = 1; i <= x; i++) {
        resultado.push(i)
    }    
    console.log(resultado.join(' '))
}