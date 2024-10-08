let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let n = 0;

let grenais = 0;
let vitoriasInter = 0;
let vitoriasGremio = 0;
let empates = 0;
let maisvitorias = "";

while (true) {
    let [golsinter, golsgremio] = lines[n++].split(' ').map(Number);
    grenais ++

    if (golsgremio > golsinter) {
        vitoriasGremio ++
    } else if (golsinter > golsgremio) {
        vitoriasInter ++
    } else {
        empates ++
    }

    console.log("Novo grenal (1-sim 2-nao)")
    let continuar = parseInt(lines[n++])
    if (continuar === 2) {
        break;
    }

    if (vitoriasGremio > vitoriasInter) {
        maisvitorias = "Gremio"
    } else if (vitoriasInter > vitoriasGremio) {
        maisvitorias = "Inter"
    }
}

console.log(`${grenais} grenais`)
console.log(`Inter:${vitoriasInter}`)
console.log(`Gremio:${vitoriasGremio}`)
console.log(`Empates:${empates}`)
console.log(`${maisvitorias} venceu mais`)

