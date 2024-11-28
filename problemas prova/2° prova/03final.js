let x = 6

let pares = 0
let impares = 0
let totalpar = 0
let totalimp = 0


for (let i = 1; i <= x; i++) {
    if (i % 2 === 0) {
        pares++
        totalpar += i
    } else if(i % 2 !== 0){
        impares++
        totalimp += i
    }
}
console.log(`Pares: ${pares} Total: ${totalpar}`)
console.log(`Impares: ${impares} Total: ${totalimp}`)