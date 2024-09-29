let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let x = parseInt(lines[0])
let y = parseInt(lines[1])
let naoMultiplos = 0

if (x > y) {
    [x, y] = [y, x];
}

for (let i = x; i <= y; i++) {
    if (i % 13 !== 0) {
        naoMultiplos += i    
    }
}
console.log(naoMultiplos)