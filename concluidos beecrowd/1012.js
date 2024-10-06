let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let [A, B, C] = lines.shift().split(" ").map((x) => parseFloat(x));
const pi = 3.14159;

let TRIANGULO = (A * C) / 2;
let CIRCULO = C * C * pi;
let TRAPEZIO = (A + B)/2 * C;
let QUADRADO = B * B;
let RETANGULO = A * B;

console.log(`TRIANGULO: ${TRIANGULO.toFixed(3)}`);
console.log(`CIRCULO: ${CIRCULO.toFixed(3)} `);
console.log(`TRAPEZIO: ${TRAPEZIO.toFixed(3)}`);
console.log(`QUADRADO: ${QUADRADO.toFixed(3)} `);
console.log(`RETANGULO: ${RETANGULO.toFixed(3)} `);

