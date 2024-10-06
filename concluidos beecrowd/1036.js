let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let [A,B,C] = lines.shift().trim().split(" ").map((x) => parseFloat(x));

let delta = B * B - 4 * A * C;

let resultado1 = (-B + Math.sqrt(delta))/(2*A);
let resultado2 = (-B - Math.sqrt(delta))/(2*A);

if (A !== 0 && delta > -1) {
console.log(`R1 = ${resultado1.toFixed(5)}`);
console.log(`R2 = ${resultado2.toFixed(5)}`);
} else console.log("Impossivel calcular");

//let [a,b,c] = lines.shift().split(" ").map((x) => parseFloat(x));
//let delta = b*b - 4*a*c;

//let x1 = (-b + Math.sqrt(delta))/(2*a);
//let x2 = (-b - Math.sqrt(delta))/(2*a);

//if (a!== 0 && delta > -1) {
//    console.log(`R1 = ${x1.toFixed(5)}`)
//    console.log(`R2 = ${x2.toFixed(5)}`)
//} else {
//    console.log("Impossivel calcular")
//}
