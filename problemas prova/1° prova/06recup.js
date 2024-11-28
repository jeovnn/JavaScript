let codLanche = 103
let qtde = 2

let preco = 0
switch(codLanche) {
    case 100: preco = 7.50 * qtde;
    break;
    case 101: preco = 15.30 * qtde;
    break;
    case 102: preco = 4.50 * qtde;
    break;
    case 103: preco = 6 * qtde;
    break;
    case 104: preco = 5.50 * qtde;
    break;
    case 105: preco = 10 * qtde;
    break;
    case 106: preco = 11 * qtde;
    break;
    case 107: preco = 5 * qtde;
    break;
    case 108: preco = 2.50 * qtde;
    break;
    case 109: preco = 8 * qtde;
    break;
}
console.log(`R$ ${preco.toFixed(2)}`)