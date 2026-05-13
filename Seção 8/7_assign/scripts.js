// Este script demonstra o uso do método Object.assign() para mesclar objetos em JavaScript.
// Object.assign() copia propriedades de um ou mais objetos fonte para um objeto alvo.
// Aqui, estamos adicionando propriedades de 'adicionais' ao objeto 'carro'.
// Isso é útil para combinar configurações ou adicionar funcionalidades sem modificar objetos originais.
// Como usar: Execute o script e veja o console; o objeto 'carro' terá as propriedades extras após o assign.
// Princípio: Imutabilidade - Object.assign cria uma cópia modificada, preservando o original.

let carro = {
    portas: 4,
    motor: 2.0,
    arCondicionado: true,
}

let adicionais = {
    tetoSolar: true,
    vidroEletrico: true,
}

console.log(carro); // Exibe o objeto carro original

Object.assign(carro, adicionais); // Mescla as propriedades de 'adicionais' em 'carro'

console.log(carro); // Exibe o objeto carro após a mesclagem