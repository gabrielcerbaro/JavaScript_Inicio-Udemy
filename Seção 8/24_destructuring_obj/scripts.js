// Este script demonstra destructuring em objetos.
// Destructuring permite extrair propriedades de um objeto e guardar em variaveis.

let pessoa = {
    nome: "Gabriel",
    idade: 24,
    altura: 1.86,
    cidade: "Monte Mor",
};

// Extrai as propriedades do objeto pessoa.
// Cada propriedade recebe um novo nome de variavel:
// nome vira vNome, idade vira vIdade, altura vira vAltura e cidade vira vCidade.
const {nome: vNome, idade: vIdade, altura: vAltura, cidade: vCidade} = pessoa;

// Exibe os valores extraidos do objeto.
console.log(vNome);
console.log(vIdade);
