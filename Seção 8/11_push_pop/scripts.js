// Este script demonstra os metodos push() e pop().
// push() adiciona um item no final do array.
// pop() remove o ultimo item do array e retorna o item removido.

let nomes = ["Gabriel", "Gabriela", "Cerbaro"];

// Remove "Cerbaro", que era o ultimo item do array.
let nomeRemovido = nomes.pop();

// Exibe o item removido e depois o array atualizado.
console.log(nomeRemovido);
console.log(nomes);

// Adiciona um novo item no final do array.
nomes.push("CerbaroN");

// Exibe o array depois da inclusao.
console.log(nomes);

// Remove novamente o ultimo item do array.
let nomeRemovido2 = nomes.pop();

// Exibe o array depois da segunda remocao.
console.log(nomes);
