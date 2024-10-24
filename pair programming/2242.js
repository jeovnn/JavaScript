let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let letras = lines.shift().split(''); 
let vogais = [];

for (let letra of letras) {
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        vogais.push(letra);
    }
}

let palindromo = vogais.join('') === vogais.reverse().join('');

console.log(palindromo ? 'S' : 'N');