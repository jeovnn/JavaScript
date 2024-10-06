let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

const [x, n] = input.split(' ').map(Number);

let resultado = "";
for (let i = 1; i <= n; i++) {
    resultado += i
    if (i % x === 0) {
        console.log(resultado) 
        resultado = "";
    } else {
        resultado += " "
    }
}
if (resultado) {
    console.log(resultado)
}