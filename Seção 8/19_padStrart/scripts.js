// Este script demonstra o método padStart() para preencher strings até um tamanho mínimo.
// padStart() adiciona caracteres no início da string, sem alterar o valor original se já for grande o suficiente.
// Aqui, formatamos códigos SKU com zeros ou outros caracteres à esquerda para garantir comprimento fixo.
// Como usar: Execute o script e veja os SKUs preenchidos até 6 caracteres.
// Princípio: Padronização de dados facilita comparações e exibição uniforme.

let sku = "4090";

console.log(sku.padStart(6, "50")); // "504090" - adiciona caracteres até totalizar 6

let sku2 = "10";

console.log(sku2.padStart(6, "50")); // "505010" - adiciona caracteres à esquerda para completar 6