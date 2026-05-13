// Este script demonstra o método split() para transformar strings em arrays em JavaScript.
// split() separa a string em partes usando um separador e retorna um array com as substrings.
// Aqui, dividimos frases em palavras e uma lista de frutas em itens individuais.
// Como usar: Execute o script e veja os arrays resultantes no console.
// Princípio: Conversão entre strings e arrays é útil para análise de texto e processamento de dados.

let frase = "O rato roeu a roupa do rei de roma";

let lista = frase.split(" "); // Divide por espaços

console.log(lista); // Exibe as palavras como elementos de array

let frase2 = "maça;banana;ameixa;uva;morango";

let lista2 = frase2.split(";"); // Divide por ponto-e-vírgula

console.log(lista2); // Exibe os itens de fruta em um array