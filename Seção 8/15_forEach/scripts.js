// Este script demonstra o método forEach() para iterar sobre arrays em JavaScript.
// forEach() executa uma função para cada elemento do array.
// Aqui, usamos uma arrow function para exibir cada nome.
// Isso é uma alternativa moderna aos loops for tradicionais.
// Como usar: Execute o script e veja cada nome sendo processado.
// Princípio: Funcional - promove programação declarativa sobre imperativa.

let nomes = ["Gabriel", "Cerbaro", "Gabriela", "Generoso", "Tica", "Amora"];

nomes.forEach(nome => {
    console.log("O nome é " + nome); // Executa para cada elemento
});