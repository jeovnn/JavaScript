let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let dados = []
let digitoproblema = ''
let digitossaida = []

function removerdigito(array, x) {
    let result = ''
    let agrupamento = ''
    
    result = array.filter(numero => numero !== x)

    for (let i = 0; i < result.length; i++) {
        agrupamento += result[i]
    }

    while (agrupamento.startsWith('0')) {
        agrupamento = agrupamento.substring(1)
    }

    if (agrupamento === '') {
        agrupamento = '0'
    }
    
    return agrupamento
}

let i = 0
while (lines[i] != '0 0') {
    dados = lines[i].split(' ')
    digitoproblema = dados[0]
    digitossaida = dados[1].split('')
    
    console.log(removerdigito(digitossaida, digitoproblema))
    i++
}