// Este script demonstra o método trim() para remover espaços em branco do início e do fim de uma string.
// trim() retorna uma nova string sem modificar a original.
// Aqui, usamos uma string com espaços e quebras de linha para mostrar a limpeza de texto.
// Como usar: Execute o script e veja a diferença entre a string original e a string corrigida.
// Princípio: Normalização de entrada ajuda a evitar erros em processamento de texto.

let nome = "  \n Gabriel \n   ";

console.log(nome); // Exibe a string com espaços extras e quebras de linha

let nomeCorrigido = nome.trim(); // Remove espaços do começo e do fim

console.log(nomeCorrigido); // Exibe "Gabriel" sem espaços extras