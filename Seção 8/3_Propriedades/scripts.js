// Este script demonstra o uso de propriedades em JavaScript.
// Propriedades sao informacoes associadas a um valor ou objeto.

let nome = "Gabriel";

// A propriedade length retorna a quantidade de caracteres da string.
console.log(nome.length);

let arr = [1, 2, 3, 4, 5, 6, 7];

// Em arrays, length retorna a quantidade de elementos.
console.log(arr.length);

// Tambem e possivel acessar uma propriedade usando colchetes e o nome dela como texto.
console.log(arr[`length`]);

// Aqui os colchetes acessam um item pelo indice, nao uma propriedade pelo nome.
console.log(arr[1]);
