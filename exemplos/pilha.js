//lógica de pilha, ultimo a entrar -> primeiro a sair

let pilha = []

function adicionarNaFila (n){
    pilha.push(n)
}

function removerDaFila(n){
    pilha.pop()
}

adicionarNaFila(32)
adicionarNaFila(90)
adicionarNaFila(21)
removerDaFila()
console.log(pilha)