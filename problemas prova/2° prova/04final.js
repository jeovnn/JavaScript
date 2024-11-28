let notas = [2.6, 1.2, 2.7, 3.1, 5.2]

let soma = 0

soma += notas[0] * 0.30
soma += notas[1] * 0.30
soma += notas[2] * 0.20
soma += notas[3] * 0.10
soma += notas[4] * 0.10

console.log("Média: " + soma.toFixed(2))

if (soma > 7.35) {
    console.log("Aprovado")
} else if (soma < 7.35 && soma > 4) {
    console.log("Em exame")
} else {
    console.log("Reprovado")
}


