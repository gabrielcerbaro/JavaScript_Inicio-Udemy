let pessoa = {
    nome: "Gabriel",
    idade: 24,
    altura: 1.86,
}

console.log(pessoa.nome);

delete pessoa.altura;

console.log(pessoa.altura);

pessoa.casado = true;

console.log(pessoa);
