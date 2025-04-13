let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let n = lines.shift()

for (let i = 0; i < n; i++){
    let [vingador,forca] = lines[i].split(" ")

    if (vingador === "Thor") {
        console.log("Y")
    } else {
        console.log("N")
    }
}