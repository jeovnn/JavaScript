let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let result = 0;

for (let i = 1; i<11; i++) {
    result = parseInt(i * lines[0]);
    console.log(`${i} x ${lines[0]} = ${result}`);
}

