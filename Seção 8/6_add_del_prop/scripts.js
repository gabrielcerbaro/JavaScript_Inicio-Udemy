// Este script demonstra como adicionar e remover propriedades de objetos em JavaScript.
// Objetos são estruturas de dados mutáveis que permitem modificar suas propriedades dinamicamente.
// Aqui, criamos um objeto 'pessoa', acessamos uma propriedade existente, removemos uma propriedade usando 'delete',
// e adicionamos uma nova propriedade.
// Isso ilustra a flexibilidade dos objetos para representar dados que podem mudar.
// Como usar: Abra o arquivo index.html no navegador, abra o console do desenvolvedor (F12) e veja as saídas.
// Princípio: Objetos permitem modelar entidades com dados variáveis.

let pessoa = {
    nome: "Gabriel",
    idade: 24,
    altura: 1.86,
}

console.log(pessoa.nome); // Acessa e exibe a propriedade 'nome'

delete pessoa.altura; // Remove a propriedade 'altura' do objeto

console.log(pessoa.altura); // Tenta acessar 'altura', que agora é undefined

pessoa.casado = true; // Adiciona uma nova propriedade 'casado' ao objeto

console.log(pessoa); // Exibe o objeto completo após as modificações
