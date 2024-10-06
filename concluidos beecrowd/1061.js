let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let dia1 = parseInt(lines[0].split(' ')[1])
let hora1 = parseInt(lines[1].split(' ')[0])
let min1 = parseInt(lines[1].split(' ')[2])
let seg1 = parseInt(lines[1].split(' ')[4])

let dia2 = parseInt(lines[2].split(' ')[1])
let hora2 = parseInt(lines[3].split(' ')[0])
let min2 = parseInt(lines[3].split(' ')[2])
let seg2 = parseInt(lines[3].split(' ')[4])

let duracaodia = dia2 - dia1 
let duracaohora = hora2 - hora1
let duracaomin = min2 - min1
let duracaoseg = seg2 - seg1

if (duracaoseg < 0) {
    duracaoseg += 60;
    duracaomin -= 1;
}

if (duracaomin < 0) {
    duracaomin += 60;
    duracaohora -= 1;
}

if (duracaohora < 0) {
    duracaohora += 24;
    duracaodia -= 1;
}

console.log(`${duracaodia} dia(s)`)
console.log(`${duracaohora} hora(s)`)
console.log(`${duracaomin} minuto(s)`)
console.log(`${duracaoseg} segundo(s)`)