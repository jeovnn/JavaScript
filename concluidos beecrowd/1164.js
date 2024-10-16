let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let n = parseInt(lines[0])

for (let i = 1; i <= n; i++) {
    valores = parseInt(lines[i])
    let somadivisores = 0
    for (let j = 1; j < valores; j++) {
        if (valores % j === 0) {
            somadivisores += j
        }
    }

    if (somadivisores === valores) {
        console.log(`${valores} eh perfeito`)
    } else {
        console.log(`${valores} nao eh perfeito`)
    }
}