let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let numbers = lines.join(' ').trim().split(/\s+/).map(Number);

a = numbers[0]
n = 0

for (let i = 1; i < numbers.length; i++){
    if (numbers[i] > 0) {
        n = numbers[i]
        break;
    }
}

let soma = 0
for (let i = 0; i < n; i++){
    soma += a + i
}

console.log(soma)