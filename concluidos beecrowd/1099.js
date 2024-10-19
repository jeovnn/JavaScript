let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let n = parseInt(lines[0]);

for (let i = 1; i <= n; i++) {
    let [x,y] = lines[i].split(' ').map(Number)
    
    if (x > y) {
        [x, y] = [y, x];
    }

    let soma = 0
    for (let j = x + 1; j < y; j++) {
        if (j % 2 !== 0) {
            soma += j
        }
    }
    console.log(soma)
}