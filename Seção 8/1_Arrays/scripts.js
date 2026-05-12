// Este script demonstra a criação e exibição de arrays em JavaScript.
// Arrays são objetos que permitem armazenar múltiplos valores em uma única variável.
// Aqui, estamos declarando arrays de diferentes tipos: números, strings, booleanos e mistos.
// Isso ilustra o conceito de coleção de dados, seguindo o princípio de organização de dados relacionados.

// Declarando um array de números
let arr = [1, 2, 3, 4, 5, 6, 7];
// Arrays são objetos em JavaScript, e aqui 'arr' é uma propriedade que armazena uma lista de números.
// Dica: Use arrays quando precisar armazenar uma sequência de valores do mesmo tipo ou relacionados.
// Lembre-se do princípio DRY (Don't Repeat Yourself): arrays evitam repetição de variáveis individuais.

let str = ["Gabriel", "Gabriela", "Cerbaro"];
// 'str' é um array de strings. Strings são sequências de caracteres.
// Dica: Acesse elementos individuais usando índices, como str[0] para "Gabriel".

let bool = [true, false, true];
// 'bool' é um array de valores booleanos (verdadeiro/falso).
// Dica: Útil para armazenar estados ou condições.

let mist = ["Gabriel", 24, true];
// 'mist' é um array misto, contendo diferentes tipos de dados.
// Dica: Embora possível, evite arrays mistos para manter a consistência e facilitar a manutenção, seguindo o princípio KISS (Keep It Simple, Stupid).

// Exibindo os arrays no console
console.log(arr);
console.log(str);
console.log(bool);
console.log(mist);
// O método console.log() é usado para depurar e visualizar valores.
// Dica: Sempre teste seus arrays logando-os para verificar se estão corretos.