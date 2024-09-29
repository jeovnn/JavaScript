let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let i = 0;
let numero = 0;
let par = 0;
let impar = 0;
let positivo = 0;
let negativo = 0;

for (i = 0; i < 5; ++i) {
    numero = parseInt(lines.shift());
    if (numero % 2 === 0)  ++par;
    if (numero % 2 !== 0 )  ++impar;
    if (numero > 0)  ++positivo;
    if (numero < 0)  ++ negativo; 
}

console.log(`${par} valor(es) par(es)`);
console.log(`${impar} valor(es) impar(es)`);
console.log(`${positivo} valor(es) positivo(s)`);
console.log(`${negativo} valor(es) negativo(s)`);
