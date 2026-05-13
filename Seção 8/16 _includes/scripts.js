// Este script demonstra o método includes() para verificar se um array contém um elemento.
// includes() retorna true se o elemento existe, false caso contrário.
// Aqui, verificamos se "Gabriel" está no array e adicionamos "Thor" se não estiver.
// Isso é útil para validações e evitar duplicatas.
// Como usar: Execute o script e veja os resultados booleanos e o array modificado.
// Princípio: Verificação eficiente sem necessidade de loops manuais.

let nomes = ["Gabriel", "Cerbaro", "Gabriela", "Generoso", "Tica", "Amora"];

console.log(nomes.includes("Gabriel")); // true

if (nomes.includes("Thor")) {
    console.log(nomes); // Não executa, pois "Thor" não está
} else {
    nomes.push("Thor"); // Adiciona "Thor"
}

console.log(nomes); // Array com "Thor" adicionado