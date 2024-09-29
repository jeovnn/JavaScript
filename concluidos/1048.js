let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let valor = parseFloat(lines[0]);
let salario = valor;
let porcentagem = 0;

if (0 < salario && salario <= 400) {
    salario += (salario*0.15);
    porcentagem = 15;
} else if (400 < salario && salario <= 800) {
    salario += (salario*0.12);
    porcentagem = 12;
} else if (800 < salario && salario <= 1200) {
    salario += (salario*0.10);
    porcentagem = 10;
} else if (1200 < salario && salario <= 2000) {
    salario += (salario*0.07);
    porcentagem = 7;
} else if (salario > 2000) {
    salario += (salario*0.04);
    porcentagem = 4;
}

let reajuste = salario - valor;

console.log(`Novo salario: ${salario.toFixed(2)}`)
console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`);
console.log(`Em percentual: ${porcentagem} %`)