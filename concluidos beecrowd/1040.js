let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

var valores = lines.shift().split(" ").map(Number);

let n1 = valores[0];
let n2 = valores[1];
let n3 = valores[2];
let n4 = valores[3];

let media = (n1 * 2 + n2 * 3 + n3 * 4 + n4 * 1) / 10;

console.log(`Media: ${media.toFixed(1)}`);

if (media >= 7.0) {
    console.log("Aluno aprovado.");
} else if (media >= 5.0 && media <= 6.9) {
    console.log("Aluno em exame.");
    let notadoexame = parseFloat(lines.shift().trim());
    console.log(`Nota do exame: ${notadoexame.toFixed(1)}`);
    
    let mediafinal = (media + notadoexame) / 2;
    
    if (mediafinal >= 5.0) {
        console.log("Aluno aprovado.");
    } else {
        console.log("Aluno reprovado.");
    }
    
    console.log(`Media final: ${mediafinal.toFixed(1)}`);
} else {
    console.log("Aluno reprovado.");
}
