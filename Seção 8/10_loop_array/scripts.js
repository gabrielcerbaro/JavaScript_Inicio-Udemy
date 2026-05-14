// Este script mostra duas formas de percorrer um array: for e while.
// Percorrer um array significa acessar cada item, um por vez.

let nomes = ["Gabriel", "Gabriela", "Cerbaro"];

// O for usa uma variavel de controle chamada i.
// Enquanto i for menor que nomes.length, o loop continua.
for (let i = 0; i < nomes.length; i++) {
    // nomes[i] acessa o item que esta na posicao atual do loop.
    console.log(nomes[i]);
}

// O while tambem repete o codigo enquanto a condicao for verdadeira.
let i = 0;

while (i < nomes.length) {
    // Exibe o item atual do array.
    console.log(nomes[i]);

    // Incrementa i para passar para a proxima posicao e evitar loop infinito.
    i++;
}
