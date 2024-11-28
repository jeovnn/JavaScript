let saldoIni = 1000
let operacao = [1, 2, 1]
let valor = [190, 20, 900]

for (let i = 0; i < operacao.length; i++) {

    if (operacao[i] === 1) {
        saldoIni -= valor[i]
    } else if (operacao[i] === 2) {
        saldoIni += valor[i]
    } else if (operacao[i] === 3) {
        console.log(`Saldo Atual: ${saldoIni}`)
    }

}

console.log(`Saldo Final: ${saldoIni}`)