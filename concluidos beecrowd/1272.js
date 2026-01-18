let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let n = parseInt(lines.shift())

for(let i = 0; i < n; i++){
    let palavras = lines[i].split(' ');
    
    for(let w = 0; w < palavras.length; w++){
        if (palavras[w] === ''){
            palavras.splice(w, 1);
            w--
        }
    }
    
    let descriptografada = ''
    for(let z = 0; z < palavras.length; z++){   
        descriptografada += palavras[z][0]
    }
    console.log(descriptografada)
}