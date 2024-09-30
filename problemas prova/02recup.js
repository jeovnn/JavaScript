let A = 6
let B = 7

let maior = 0
if(A>B) {
    maior = A
} else if (B > A) {
    maior = B
} else {
    maior = A || B
}

console.log(maior)