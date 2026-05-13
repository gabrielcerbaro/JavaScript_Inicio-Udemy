// Este script demonstra como percorrer arrays usando loops em JavaScript.
// Loops permitem executar código repetidamente para cada elemento de um array.
// Aqui, usamos um loop 'for' e um loop 'while' para iterar sobre um array de nomes.
// Isso é essencial para processar coleções de dados.
// Como usar: Execute o script e veja cada nome sendo exibido no console.
// Princípio: Use loops para automatizar tarefas repetitivas em dados estruturados.

let nomes = ["Gabriel", "Gabriela", "Cerbaro"];

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]); // Exibe cada nome usando índice
}

let i = 0;
while (i < nomes.length) {
    console.log(nomes[i]); // Mesmo resultado com while
    i++;
}
