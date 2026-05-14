// Este script demonstra o metodo trim().
// trim() remove espacos em branco do inicio e do fim de uma string.
// Ele tambem remove quebras de linha nas extremidades.

let nome = "  \n Gabriel \n   ";

// Exibe a string original, ainda com espacos e quebras de linha.
console.log(nome);

// Cria uma nova string sem os espacos extras nas pontas.
let nomeCorrigido = nome.trim();

// Exibe apenas "Gabriel", sem os espacos externos.
console.log(nomeCorrigido);
