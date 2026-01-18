let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let n = parseInt(lines.shift())

let count = 0
while(count < n){
    let qtdepalavras = parseInt(lines.shift())
    let palavras = []

    for(let i = 0; i < qtdepalavras;i++){
        palavras.push(lines.shift().trim());
    }

    let iguais = palavras.every(x => x === palavras[0]);

    if(!iguais){
        console.log('ingles')
    } else {
        console.log(palavras[0])
    }
    count++
}