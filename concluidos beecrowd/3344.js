let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let entrada = parseInt(lines[0])

const numeros = ["um","dois","tres","quatro","cinco","seis","sete","oito","nove"]
const diferentes = ["onze","doze","treze","quatorze","quinze","dezesseis","dezessete","dezoito","dezenove"]
const dezenas = ["dez","vinte","trinta","quarenta","cinquenta","sessenta","setenta","oitenta","noventa","cem"]

function converteString(x){

    //caso for entre 11 e 19
    if(x>10 && x<20){
        let diferenteExtenso = diferentes[x-11]
        return diferenteExtenso
    }

    //caso for menor que 10
    if(x<10){
        let menorExtenso = numeros[x-1]
        return menorExtenso        
    }

    //caso for dezena inteira
    if(x >= 10 && x <= 100 && x % 10 === 0){
        let dezenaInteiraExtensa = dezenas[(x / 10)-1]
        return dezenaInteiraExtensa
    }

    //se for o restante
    if(x > 20 && x % 10 !== 0){
        let quebra = entrada.toString().split('')

        let restanteExtensoDezena = dezenas[quebra[0]-1]
        let restanteExtensoUnidade = numeros[quebra[1]-1]
        let agrupamento = (restanteExtensoDezena + " e " + restanteExtensoUnidade)
        return agrupamento
    }
}

let resposta = converteString(entrada)
console.log(resposta.length)