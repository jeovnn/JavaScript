let senioridade = 1
let tempoProjeto = 120

let estagiario = 1.99
let junior = 8.50
let pleno  = 12.50
let senior = 19.99
let especialista = 25.75

let orcamento = 0
switch(senioridade) {
    case 1 : orcamento = tempoProjeto * estagiario;
    break;
    case 2 : orcamento = tempoProjeto * junior;
    break;
    case 3 : orcamento = tempoProjeto * pleno;
    break;
    case 4 : orcamento = tempoProjeto * senior;
    break;
    case 5 : orcamento = tempoProjeto * especialista
    break;
}
console.log(`R$ Orçamento: ${orcamento.toFixed(2)}`)