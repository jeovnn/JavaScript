class Automovel {
    constructor(name) {this.name = name}
    andar() {
        console.log(`Meu ${this.name} esta andando!`)
    }
}

Automovel.prototype.freiar = function () {
    console.log(`Meu ${this.name} esta freiando ....... parou!`)
}

let carro = new Automovel ('Chevette');
carro.andar()
carro.freiar()

let trator = new Automovel ('Uno');
trator.andar()
let motocicleta = new Automovel ('honda 125')
motocicleta.freiar()