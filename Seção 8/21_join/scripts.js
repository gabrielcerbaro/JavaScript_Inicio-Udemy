// Este script demonstra o metodo join().
// join() transforma os itens de um array em uma unica string.
// O texto passado para join() define o separador entre os itens.

let frase = "O rato roeu a roupa do rei de roma";

// Exibe a frase original como string.
console.log(frase);

// Divide a frase em um array de palavras, usando o espaco como separador.
let lista = frase.split(" ");

// Exibe o array criado pelo split().
console.log(lista);

// Junta os itens do array em uma string novamente, colocando espaco entre eles.
let fraseNova = lista.join(" ");

// Exibe a frase original novamente.
// A variavel fraseNova foi criada acima, mas este console.log ainda mostra a variavel frase.
console.log(frase);
