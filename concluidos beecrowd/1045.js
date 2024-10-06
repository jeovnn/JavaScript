let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let [a,b,c] = lines.shift().split(" ").map((x) => parseFloat(x));

if (a >= (b + c)) {
    console.log("NAO FORMA TRIANGULO")
} else if ((a**2) == (b**2 + c**2)) {
    console.log("TRIANGULO RETANGULO")
} else if ((a**2) > (b**2 + c**2)) {
    console.log("TRIANGULO OBTUSANGULO") 
} else if ((a**2) < (b**2 + c**2)) {
    console.log("TRIANGULO ACUTANGULO") 
} if (a === b && a === c) {
    console.log("TRIANGULO EQUILATERO") 
} else if ((a === b && a !== c) || (b === c && b !== a) || (a === c && a !== b)) {
    console.log("TRIANGULO ISOSCELES")
} 