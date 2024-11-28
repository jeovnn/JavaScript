let inicial = 6
let maximo = 100
let decrem = 2

let vezes = 0

while (inicial < maximo) {
    for (let i = (inicial += inicial - decrem); i <= maximo; i+= inicial) {    
    }
    vezes += 1
}
console.log(vezes)
