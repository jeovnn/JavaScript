let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let a = lines[0]
let b = lines[1]
let c = lines[2]

let custosalaA = b * 2 + c * 4 
let custosalaB = a * 2 + c * 2
let custosalaC = a * 4 + b * 2

let menorCusto = Math.min(custosalaA, custosalaB, custosalaC);
console.log(menorCusto);



