let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let n = lines[0]
let dias = 0

for (let i = 1; i <= n; i++) {
    let valor = parseFloat(lines[i])

    while (valor > 1) {
        valor /= 2
        dias ++

    }
    console.log(dias, "dias")
    dias = 0
}