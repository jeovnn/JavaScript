let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let salario = parseFloat(lines[0]);
let pagar = 0;

if (salario <= 2000) {
    console.log("Isento");
} else if (salario <= 3000) {
    pagar = (salario - 2000) * 0.08;
    console.log(`R$ ${pagar.toFixed(2)}`);
} else if (salario <= 4500) {
    pagar = (1000 * 0.08) + ((salario - 3000) * 0.18);
    console.log(`R$ ${pagar.toFixed(2)}`);
} else {
    pagar = (1000 * 0.08) + (1500 * 0.18) + ((salario - 4500) * 0.28);
    console.log(`R$ ${pagar.toFixed(2)}`);
}