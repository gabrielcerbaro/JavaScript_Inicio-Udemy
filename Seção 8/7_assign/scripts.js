let carro = {
    portas: 4,
    motor: 2.0,
    arCondicionado: true,
}

let adicionais = {
    tetoSolar: true,
    vidroEletrico: true,
}

console.log(carro);

Object.assign(carro, adicionais);

console.log(carro);