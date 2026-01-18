let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let palavras = []
let palavraseparada = ''


let i = 0
while(lines[i]!='*'){
    let primeiraletra = []
    let tautograma = 'Y'
    palavras = lines[i].split(' ')

    for (let i =0; i< palavras.length; i++){
        palavraseparada = palavras[i].toUpperCase()
        primeiraletra += palavraseparada[0].toUpperCase()
    }
   for(let w = 0; w < primeiraletra.length; w++){
    if(primeiraletra[w]!= palavraseparada[0]){
        tautograma='N'
    }
   }
   console.log(tautograma)
    i++
}