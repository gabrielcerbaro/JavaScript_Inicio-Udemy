// Este script demonstra o conceito de mutação e referência em objetos JavaScript.
// Objetos são passados por referência, não por valor. Isso significa que variáveis apontam para o mesmo objeto na memória.
// Aqui, modificamos objetos através de referências e comparamos igualdade.
// Isso explica por que mudanças em uma referência afetam outras.
// Como usar: Execute o script e observe como mudanças em pessoa2 afetam pessoa, mas pessoa3 é independente.
// Princípio: Entenda referências para evitar bugs inesperados em manipulação de objetos.

let pessoa = {
    nome: "Gabriel",
};

let pessoa2 = pessoa; // pessoa2 aponta para o mesmo objeto que pessoa

let pessoa3 = {
    nome: "Gabriel", // pessoa3 é um novo objeto com mesmo conteúdo
};

console.log(pessoa2 == pessoa); // true, mesma referência
console.log(pessoa3 == pessoa); // false, objetos diferentes
console.log(pessoa3 == pessoa2); // false, objetos diferentes

pessoa2.nome = "Gabriela"; // Modifica o objeto através de pessoa2

console.log(pessoa2.nome); // "Gabriela"

pessoa.nome = "Cerbaro"; // Modifica o mesmo objeto através de pessoa

console.log(pessoa.nome); // "Cerbaro" - pessoa2 também mudou implicitamente
