// Este script demonstra mutacao e referencia em objetos.
// Quando um objeto e atribuido a outra variavel, as duas variaveis apontam para o mesmo objeto.

let pessoa = {
    nome: "Gabriel",
};

// pessoa2 nao cria uma copia. Ela aponta para o mesmo objeto de pessoa.
let pessoa2 = pessoa;

// pessoa3 e um novo objeto, mesmo tendo o mesmo conteudo inicial.
let pessoa3 = {
    nome: "Gabriel",
};

// true, porque pessoa2 e pessoa apontam para o mesmo objeto.
console.log(pessoa2 == pessoa);

// false, porque pessoa3 e um objeto diferente na memoria.
console.log(pessoa3 == pessoa);
console.log(pessoa3 == pessoa2);

// Altera o nome usando pessoa2. Como e o mesmo objeto, pessoa tambem sera afetada.
pessoa2.nome = "Gabriela";

console.log(pessoa2.nome);

// Altera o mesmo objeto usando pessoa.
pessoa.nome = "Cerbaro";

console.log(pessoa.nome);
