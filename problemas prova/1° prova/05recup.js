let sexo = 'M'
let altura = 1.89

let pesoideal = 0
if (sexo === 'M') {
    pesoideal = (72.7 * altura) - 58
} else if (sexo === 'F') {
    pesoideal = (62.1 * altura) - 44.7
}
console.log(`Peso ideal: ${pesoideal.toFixed(2)}`)