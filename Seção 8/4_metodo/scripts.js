// Este script demonstra o uso de métodos em strings.
// Métodos são funções associadas a objetos que realizam ações ou retornam valores.
// Estamos chamando métodos para alterar o caso das letras.

// Declarando uma string
let nome = "nike";
// Strings têm vários métodos built-in.

console.log(nome.toUpperCase()); // Método toUpperCase() converte para maiúsculas
// 'toUpperCase' é um método que retorna uma nova string em maiúsculas.
// Dica: Use para normalizar entradas, como emails ou nomes.
// Princípio: Métodos não alteram o objeto original (imutabilidade), retornam novos valores.

let nome2 = nome.toUpperCase(); // Atribuindo o resultado a uma nova variável
// Dica: Sempre atribua o retorno de métodos a variáveis para usar o resultado.

console.log(nome2.toLowerCase()); // Método toLowerCase() converte para minúsculas
// 'toLowerCase' faz o oposto.
// Dica: Combine com toUpperCase para alternar casos.

console.log(typeof nome2.toLowerCase); // Verificando o tipo do método
// 'typeof' mostra que é uma função.
// Dica: Métodos são funções, então podem ser chamadas com ().

// Diferença entre método e propriedade:
// - Propriedade: armazena um valor (ex: length).
// - Método: executa uma ação (ex: toUpperCase()).
// Princípio: Métodos encapsulam comportamento, propriedades encapsulam estado.