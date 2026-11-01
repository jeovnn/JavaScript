let lista = [12,3,65,7,89,1]

function OrdenarComQuickSort(array){
    if(array.length < 2){
        return array
    } 
    let pivo = array[0]
    let menores = []
    let maiores = []
    for(let i = 1; i < array.length; i++){
        if (array[i] < pivo){
            menores.push(array[i])
        }
        if (array[i] > pivo){
            maiores.push(array[i])
        }
    }
    return OrdenarComQuickSort(menores).concat([pivo],OrdenarComQuickSort(maiores))
}

let resultado = OrdenarComQuickSort(lista)

console.log(resultado)