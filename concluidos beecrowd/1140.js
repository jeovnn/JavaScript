let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let i = 0
while(lines[i] !== "*"){

    let array = []
    let frase = lines[i].split(' ')
    let qtdpalavras = frase.length
    let primeiraletra = ''
    let tautograma = "Y"
    for(let i = 0; i < qtdpalavras; i++){
        array[i] = frase[i].toUpperCase()
        let letras = array[i].split('')
        primeiraletra += letras[0]

        let aux = i
        for(let y=0; y < primeiraletra.length;y++){
            if(primeiraletra[i] != primeiraletra[y]){
                tautograma = "N"
            }
        }
    }
    console.log(tautograma)
    i += 1
}