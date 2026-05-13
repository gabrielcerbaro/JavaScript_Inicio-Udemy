// Este script demonstra os métodos push() e pop() para manipular arrays em JavaScript.
// push() adiciona elementos no final do array, pop() remove o último elemento.
// Aqui, removemos e adicionamos elementos, mostrando como arrays podem crescer e encolher.
// Isso é útil para pilhas (LIFO - Last In, First Out).
// Como usar: Execute o script e veja o array mudando no console.
// Princípio: Arrays são estruturas dinâmicas que suportam operações eficientes no final.

let nomes = ["Gabriel", "Gabriela", "Cerbaro"];

let nomeRemovido = nomes.pop(); // Remove e retorna o último elemento

console.log(nomeRemovido); // "Cerbaro"
console.log(nomes); // ["Gabriel", "Gabriela"]

nomes.push("CerbaroN"); // Adiciona "CerbaroN" no final

console.log(nomes); // ["Gabriel", "Gabriela", "CerbaroN"]

let nomeRemovido2 = nomes.pop(); // Remove novamente o último

console.log(nomes); // ["Gabriel", "Gabriela"]
