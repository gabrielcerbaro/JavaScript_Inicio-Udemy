// Este script cria e utiliza um objeto em JavaScript.
// Objetos são estruturas que agrupam propriedades (dados) e métodos (funções).
// Aqui, modelamos um cachorro com propriedades e um método.

// Declarando um objeto
let cachorro = {
    patas: 4, // Propriedade: armazena o número de patas
    nome: "Thor", // Propriedade: armazena o nome
    latir: function() { // Método: função que executa uma ação
        console.log("Au Au");
    }
};
// Objetos são definidos com chaves {}.
// Dica: Use objetos para representar entidades do mundo real.
// Princípio: Encapsulação - dados e comportamentos juntos.

console.log(cachorro.patas); // Acessando propriedade
// Dica: Use notação de ponto para acessar propriedades.

console.log(cachorro.nome); // Outra propriedade
// Dica: Propriedades podem ser de qualquer tipo: string, number, etc.

cachorro.latir(); // Chamando o método
// Dica: Métodos são chamados com parênteses. Eles executam código.
// Princípio: Abstração - esconda detalhes internos, exponha apenas o necessário.

// Comparação:
// - Array: [] - coleção ordenada de valores.
// - Objeto: {} - coleção de pares chave-valor.
// Dica: Use objetos quando precisar de dados nomeados, arrays para listas.