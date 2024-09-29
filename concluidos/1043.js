let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let [A,B,C] = lines.shift().trim().split(" ").map((x) => parseFloat(x));
let perimetro = A+B+C;
let area = ((A + B)/2 * C)

if(A < B + C && B < A + C && C < A + B) {
    console.log(`Perimetro = ${perimetro.toFixed(1)}`);
} else {
    console.log (`Area = ${area.toFixed(1)}`);
}








