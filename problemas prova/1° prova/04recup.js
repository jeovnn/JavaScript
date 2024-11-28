let notaA1 = 5
let notaA2 = 8
let beecrowd = 10

let pesoa1a2 = (notaA1 + notaA2)/2*(0.6)
let notatotal = pesoa1a2 + (beecrowd*0.4)

if (notatotal > 7.5) {
    console.log((`MEDIA ${notatotal.toFixed(2)}`))
    console.log("ALUNO APROVADO")
} else if (notatotal >= 4 && notatotal < 7.5) {
    console.log(`MEDIA ${notatotal.toFixed(2)}`)
    console.log("ALUNO EM EXAME")
} else if (notatotal < 4){
    console.log(`MEDIA ${notatotal.toFixed(2)}`)
    console.log("ALUNO REPROVADO")
}