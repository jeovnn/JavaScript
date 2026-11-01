let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let n = Number(lines.shift())

for(let i = 0; i< n; i++){
    let soma = 0
    let acimadamedia = 0
    let teste = lines[i].split(' ').map(Number)
    let qtd = teste.shift()

    for(let k = 0; k < qtd; k++){
        soma += teste[k]
    }
    let media = soma/qtd

    for(let x = 0; x < qtd; x++){
        if(teste[x]>media){
            acimadamedia++
        }
    }
    let pctacimadamedia = (acimadamedia/qtd)*100

    console.log(pctacimadamedia.toFixed(3)+"%")
}