let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

function fatorial(num) {
    let result = BigInt(1);
    for (let i = 2; i <= num; i++) {
        result *= BigInt(i);
    }
    return result;
}

for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === "") continue;
    let [a, b] = lines[i].split(" ").map(Number);
    let somafatoriais = fatorial(a) + fatorial(b);
    console.log(somafatoriais.toString());
}