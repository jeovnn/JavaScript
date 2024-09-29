let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let [horaInicial, minutoInicial, horaFinal, minutoFinal] = lines.shift().split(" ").map((x) => parseInt(x));

let horasDuracao = 0;
let minutosDuracao = 0;

if (horaInicial < horaFinal) {
    horasDuracao = horaFinal - horaInicial 
} else if (horaInicial > horaFinal) {
    horasDuracao = (24 - horaInicial) + horaFinal;
} else {
    horasDuracao = 24;
} 

if (minutoInicial < minutoFinal) {
    minutosDuracao = minutoFinal - minutoInicial;
    if (horaInicial === horaFinal) {
        horasDuracao = 0;
    }
} else if (minutoInicial > minutoFinal) {
    minutosDuracao = (60 - minutoInicial) + minutoFinal;
    horasDuracao -= 1;
} 

console.log(`O JOGO DUROU ${horasDuracao} HORA(S) E ${minutosDuracao} MINUTO(S)`);