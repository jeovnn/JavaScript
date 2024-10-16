let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let n = parseInt(lines[0])
for (let i = 1; i <= n; i++) {
    let [a,b] = lines[i].split(' ').map(Number)

    if (b !== 0) {
        let resultado = a/b
        console.log(resultado.toFixed(1))
    } else {
        console.log("divisao impossivel")
    }
}