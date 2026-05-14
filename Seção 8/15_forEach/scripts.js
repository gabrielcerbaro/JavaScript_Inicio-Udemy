// Este script demonstra o metodo forEach().
// forEach() executa uma funcao para cada item do array.

let nomes = ["Gabriel", "Cerbaro", "Gabriela", "Generoso", "Tica", "Amora"];

// Para cada nome dentro do array, a arrow function recebe o valor atual em "nome".
nomes.forEach(nome => {
    // Exibe uma frase usando o nome atual do loop.
    console.log("O nome e " + nome);
});
