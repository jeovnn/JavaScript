let notas = [3.4, 7.1, 6.4, 8.2]

let soma = 0;
for (let i = 0; i < notas.length; i++) {
    soma+= notas[i]
}
let media = soma/notas.length
let resultado = parseFloat(media.toFixed(2))
console.log(`MEDIA = ${resultado}`)