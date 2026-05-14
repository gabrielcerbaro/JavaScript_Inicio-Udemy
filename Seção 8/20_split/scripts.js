// Este script demonstra o metodo split().
// split() divide uma string em partes e retorna um array.
// O separador define onde a string sera quebrada.

let frase = "O rato roeu a roupa do rei de roma";

// Divide a frase sempre que encontrar um espaco.
let lista = frase.split(" ");

// Exibe cada palavra como um item do array.
console.log(lista);

let frase2 = "maca;banana;ameixa;uva;morango";

// Divide a string sempre que encontrar ponto e virgula.
let lista2 = frase2.split(";");

// Exibe cada fruta como um item do array.
console.log(lista2);
