// Este script demonstra os métodos shift() e unshift() para manipular o início de arrays em JavaScript.
// shift() remove o primeiro elemento, unshift() adiciona no início.
// Aqui, removemos e adicionamos elementos no começo do array.
// Isso é útil para filas (FIFO - First In, First Out), mas menos eficiente que push/pop.
// Como usar: Execute o script e observe as mudanças no array.
// Princípio: Operações no início de arrays são custosas devido ao deslocamento de elementos.

let carros = ["FIAT", "CHEV", "FORD", "VOLKS"];

let carroRemovido = carros.shift(); // Remove e retorna o primeiro elemento

console.log(carroRemovido); // "FIAT"
console.log(carros); // ["CHEV", "FORD", "VOLKS"]

carros.unshift("Mercedez"); // Adiciona "Mercedez" no início

console.log(carros); // ["Mercedez", "CHEV", "FORD", "VOLKS"]
console.log(carros[0]); // "Mercedez"