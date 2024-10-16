let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let continuar = true;

while (continuar) {
    let notasvalidas = [];
    let qtdenotasvalidas = 0;

    while (qtdenotasvalidas < 2) {
        let valores = parseFloat(lines.shift()); 

        if (valores < 0 || valores > 10) {
            console.log("nota invalida");
        } else {
            notasvalidas.push(valores);
            qtdenotasvalidas++;
        }
    }

    let media = (notasvalidas[0] + notasvalidas[1]) / 2;
    console.log(`media = ${media.toFixed(2)}`);

    let opcao;
    do {
        console.log("novo calculo (1-sim 2-nao)");
        opcao = parseInt(lines.shift());

    } while (opcao !== 1 && opcao !== 2);

    if (opcao === 2) {
        continuar = false;
    }
}



