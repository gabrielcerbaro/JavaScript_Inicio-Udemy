// Este script demonstra o uso do método Object.keys() para obter as chaves de um objeto em JavaScript.
// Object.keys() retorna um array com todas as chaves enumeráveis próprias do objeto.
// Aqui, criamos objetos e exibimos suas chaves.
// Isso é útil para iterar sobre propriedades de objetos ou verificar quais chaves existem.
// Como usar: Execute o script e veja o console para os arrays de chaves.
// Princípio: Reflexão - permite inspecionar a estrutura de objetos em tempo de execução.

let obj = {
    'chave1': 1,
    'chave2': 2,
    'chave3': 3,
}

console.log(obj); // Exibe o objeto completo

console.log(Object.keys(obj)); // Exibe um array com as chaves: ['chave1', 'chave2', 'chave3']

let obj2 = {
    um: 1,
    dois: 2,
    tres: 3,
}

console.log(obj2); // Exibe o segundo objeto

console.log(Object.keys(obj2)); // Exibe as chaves: ['um', 'dois', 'tres']