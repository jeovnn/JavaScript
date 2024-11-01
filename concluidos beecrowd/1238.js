let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let n = parseInt(lines[0])
for (let i = 1; i <= n; i++) {
    let [string1, string2] = lines[i].split(" ")
    let novaString = "";
    let maxLength = Math.max(string1.length, string2.length)

    for (let j = 0; j < maxLength; j++) {
        if (j < string1.length) {
           novaString += string1[j] 
        } 
        if (j < string2.length) {
           novaString += string2[j] 
        } 
    }
    console.log(novaString);
}