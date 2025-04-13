let fila = []

function adicionarNaFila(n) {
    fila.push(n) 
}

function removerDaFila() {
    return fila.shift() 
}

adicionarNaFila(21)
adicionarNaFila(44)
adicionarNaFila(89)

console.log("Fila atual:", fila)

removerDaFila()

console.log("Fila após remover 1 elemento:", fila)