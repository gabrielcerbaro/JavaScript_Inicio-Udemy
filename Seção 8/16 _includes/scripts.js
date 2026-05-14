// Este script demonstra o metodo includes().
// includes() verifica se um array possui determinado valor.
// Ele retorna true se encontrar o valor e false se nao encontrar.

let nomes = ["Gabriel", "Cerbaro", "Gabriela", "Generoso", "Tica", "Amora"];

// Verifica se "Gabriel" esta dentro do array.
console.log(nomes.includes("Gabriel"));

// Verifica se "Thor" ja existe no array.
if (nomes.includes("Thor")) {
    // Se existir, apenas exibe o array sem mudar nada.
    console.log(nomes);
} else {
    // Se nao existir, adiciona "Thor" no final do array.
    nomes.push("Thor");
}

// Exibe o array depois da verificacao.
console.log(nomes);
