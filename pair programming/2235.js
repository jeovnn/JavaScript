let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let [a,b,c] = lines.shift().split(" ").map((x) => parseFloat(x));

if (a === b || a === c || b === c) {
    console.log("S")
} else if (a + b === c || a === b + c || a + c === b ) {
    console.log("S")
} else {
    console.log("N")
}
