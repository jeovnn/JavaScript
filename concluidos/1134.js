let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let valores = []
let alcool = 0
let gasolina = 0
let diesel = 0

for (let i = 0; i < lines.length; i++) {
    valores[i] = parseInt(lines[i])
    if (valores[i] == 1) {
        alcool += 1;
    } else if (valores[i] == 2) {
        gasolina += 1;
    } else if (valores[i] == 3) {
        diesel += 1;
    } else if (valores[i] == 4) {
        break;
    }
} 

console.log("MUITO OBRIGADO")
console.log(`Alcool: ${alcool}`)
console.log(`Gasolina: ${gasolina}`)
console.log(`Diesel: ${diesel}`)



