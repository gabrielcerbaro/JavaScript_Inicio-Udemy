// Este script demonstra o metodo padStart().
// padStart() completa uma string pelo inicio ate atingir o tamanho desejado.

let sku = "4090";

// Completa a string ate ela ter 6 caracteres.
// O preenchimento usado e "50", colocado no inicio.
console.log(sku.padStart(6, "50"));

let sku2 = "10";

// Tambem completa ate 6 caracteres, repetindo o preenchimento quando necessario.
console.log(sku2.padStart(6, "50"));
