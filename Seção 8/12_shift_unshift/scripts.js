// Este script demonstra os metodos shift() e unshift().
// shift() remove o primeiro item do array.
// unshift() adiciona um novo item no inicio do array.

let carros = ["FIAT", "CHEV", "FORD", "VOLKS"];

// Remove "FIAT", que esta na primeira posicao.
let carroRemovido = carros.shift();

// Exibe o item removido e depois o array atualizado.
console.log(carroRemovido);
console.log(carros);

// Adiciona "Mercedez" no inicio do array.
carros.unshift("Mercedez");

// Exibe o array atualizado e o primeiro item atual.
console.log(carros);
console.log(carros[0]);
