// Este script demonstra JSON.stringify() e JSON.parse().
// JSON.stringify() transforma um objeto JavaScript em texto JSON.
// JSON.parse() transforma um texto JSON de volta em objeto JavaScript.

let pessoa = { 
    "nome": "Gabriel",
    "idade": 24,
    "profissao": "programador",
    "hobbies": ["Video game", "Leitura", "Esportes", "Viajar"]
};

// Converte o objeto pessoa para uma string em formato JSON.
let pessoaTexto = JSON.stringify(pessoa);

// Exibe o texto JSON gerado.
console.log(pessoaTexto);

// Como pessoaTexto e uma string, nao e possivel acessar pessoaTexto.nome como objeto.
// Por isso, o resultado sera undefined.
console.log(pessoaTexto.nome);

// Converte o texto JSON de volta para um objeto JavaScript.
let pessoaJson = JSON.parse(pessoaTexto);

// Agora o valor voltou a ser objeto, entao as propriedades podem ser acessadas normalmente.
console.log(pessoaJson);
console.log(pessoaJson.hobbies);
