let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let n = parseInt(lines.shift());

for (let i = 0; i < n; i++){
    let m = parseInt(lines.shift())

    if (m % 2 === 0) {
        console.log("0");
    } else {
        console.log("1")
    }
}