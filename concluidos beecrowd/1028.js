let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let n = lines[0]

function mdc(a,b) {
    while(b !== 0) {
        let divisorcomum = b
        b = a % b 
        a = divisorcomum
    }
    return a
}

for (let i = 1; i <= n; i++) {
    let [F1, F2] = lines[i].split(' ').map(Number);
    console.log(mdc(F1, F2));
}
