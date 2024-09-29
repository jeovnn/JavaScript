let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let n = parseInt(lines[0]);

for (let i = 1; i <= n; i++) {
    if (lines[i] > 0) {
        if (lines[i] % 2 == 0) {
            console.log("EVEN POSITIVE")
        } if (lines[i] % 2 !== 0) {
            console.log("ODD POSITIVE")
        }
} else if (lines[i] < 0) {
    if (lines[i] % 2 == 0) {
        console.log("EVEN NEGATIVE")
    } if (lines[i] % 2 !== 0) {
        console.log("ODD NEGATIVE")
    }
} else {
    console.log("NULL")
}
}