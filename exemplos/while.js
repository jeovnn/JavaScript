let senha = "abc"
let tentativas = ["123", "qwe", "0109"]

let count = 0
let input = 0

while (count !== 3) {
    if (tentativas[input] === senha) {
        console.log("Acesso permitido")
        break;
    } else if (tentativas[input] !== senha) {
        console.log("Senha incorreta")
        count ++
        input ++
    }

    if (count === 3) {
        console.log("Acesso bloqueado")
    }
}

