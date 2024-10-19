let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

for (let i = 0; i < lines.length; i++) {
    let valores = lines[i].split(' ').map(Number)
    
    if (valores[0] > valores[1]) {
        console.log("Decrescente")
    } else if (valores[1] > valores[0]) {
        console.log("Crescente")
    } 
}