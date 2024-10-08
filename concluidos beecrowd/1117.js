let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let soma = 0;
let divisor = 0
let media = 0
for (let i = 0; i < lines.length; i++) {
    let numeros = parseFloat(lines[i])
    
    if (numeros >= 0 && numeros <= 10) {
        soma += numeros
        divisor += 1
    } else {
        console.log("nota invalida")
    }

    if (divisor === 2) {
        break;
    }
}

media = soma/divisor
console.log(`media = ${media.toFixed(2)}`)