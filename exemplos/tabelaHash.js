let listahash = {
    "bruna":235,
    "carlos":342,
    "dandelion":123,
    "geralt":189
}

function pesquisaCodigoAgente(x){
    let chave = x
    let devolve = listahash[chave]
    console.log(devolve)
}

pesquisaCodigoAgente("carlos")