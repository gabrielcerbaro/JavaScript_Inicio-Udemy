// Este script mostra a diferenca entre chamar metodos e acessar propriedades.
// Metodos sao funcoes ligadas a um valor ou objeto, usadas para executar alguma acao.

let nome = "nike";

// toUpperCase() retorna uma nova string com todas as letras maiusculas.
console.log(nome.toUpperCase());

// Guarda a versao em maiusculas dentro de outra variavel.
let nome2 = nome.toUpperCase();

// toLowerCase() retorna uma nova string com todas as letras minusculas.
console.log(nome2.toLowerCase());

// Sem parenteses, estamos olhando para o metodo em si.
// O typeof mostra que toLowerCase e uma funcao.
console.log(typeof nome2.toLowerCase);
