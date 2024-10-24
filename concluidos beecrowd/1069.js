let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let n = parseInt(lines[0]);
let encontrados = 0;

for (let i = 1; i <= n; i++) {
    let diamantes = lines[i].trim();
    let stack = [];

    for (let j = 0; j < diamantes.length; j++) {
        if (diamantes[j] === "<") {
            stack.push("<");
        } else if (diamantes[j] === ">" && stack.length > 0) {
            stack.pop();
            encontrados++;
        }
    }
    console.log(encontrados);
    encontrados = 0;
}