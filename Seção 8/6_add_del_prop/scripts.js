// Este script mostra como adicionar e remover propriedades de um objeto.
// Objetos podem ser alterados depois de criados.

let pessoa = {
    nome: "Gabriel",
    idade: 24,
    altura: 1.86,
}

// Exibe o valor da propriedade nome.
console.log(pessoa.nome);

// Remove a propriedade altura do objeto pessoa.
delete pessoa.altura;

// Como altura foi removida, o resultado sera undefined.
console.log(pessoa.altura);

// Cria uma nova propriedade chamada casado e guarda true nela.
pessoa.casado = true;

// Exibe o objeto atualizado, agora sem altura e com casado.
console.log(pessoa);
