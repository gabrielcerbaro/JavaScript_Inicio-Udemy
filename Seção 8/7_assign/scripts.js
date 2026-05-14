// Este script demonstra Object.assign().
// Object.assign() copia propriedades de um objeto para outro.

let carro = {
    portas: 4,
    motor: 2.0,
    arCondicionado: true,
}

let adicionais = {
    tetoSolar: true,
    vidroEletrico: true,
}

// Exibe o objeto antes de receber as propriedades extras.
console.log(carro);

// Copia as propriedades de adicionais para dentro de carro.
// Depois disso, carro passa a ter tetoSolar e vidroEletrico.
Object.assign(carro, adicionais);

// Exibe o objeto carro depois da copia das propriedades.
console.log(carro);
