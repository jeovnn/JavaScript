let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let n = parseInt(lines[0])
let vetor = []
let ledstotais = 0

for (let i = 1; i <= n; i++) {
    vetor = lines[i]
    for (let j = 0; j < vetor.length; j++) {

        if (vetor[j] === "1") {
            ledstotais += 2
        } else if (vetor[j] === "2") {
            ledstotais += 5
        } else if (vetor[j] === "3") {
            ledstotais += 5
        } else if (vetor[j] === "4") {
            ledstotais += 4
        } else if (vetor[j] === "5") {
            ledstotais += 5
        } else if (vetor[j] === "6") {
            ledstotais += 6
        } else if (vetor[j] === "7") {
            ledstotais += 3
        } else if (vetor[j] === "8") {
            ledstotais += 7
        } else if (vetor[j] === "9") {
            ledstotais += 6
        } else if (vetor[j] === "0") {
            ledstotais += 6
        } 

    }
    console.log(`${ledstotais} leds`)
    ledstotais = 0
}
