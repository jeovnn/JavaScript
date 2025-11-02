let lista = [21,43,11,9,7,1,2,99,5,44]
let aux = 0
let fim = lista.length-1

for (let i = fim; i >= 0; i--){

    for (let j = 0; j < i; j++){
        if (lista[j] > lista[j+1]){
            aux = lista[j]
            lista[j] = lista[j+1]
            lista[j+1] = aux
        }
    }
}

console.log("lista ondenada: ",lista)