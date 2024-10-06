let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let valor = parseFloat(lines.shift());

if (0<=valor && valor<=25) {
    console.log("Intervalo [0,25]");
} else if (25<valor && valor<= 50) {
    console.log("Intervalo (25,50]");
} else if (50<valor && valor<=75) {
    console.log("Intervalo(50,75]"); 
} else if (75<valor && valor<=100) {
    console.log("Intervalo (75,100]");
} else {
    console.log ("Fora de intervalo");
}
