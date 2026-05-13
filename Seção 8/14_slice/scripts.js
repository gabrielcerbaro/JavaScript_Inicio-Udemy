// Este script demonstra o método slice() para extrair partes de arrays em JavaScript.
// slice() retorna um novo array com elementos de um intervalo, sem modificar o original.
// Aqui, extraímos subarrays usando diferentes parâmetros.
// Isso é útil para copiar ou dividir arrays.
// Como usar: Execute o script e veja os subarrays criados.
// Princípio: Imutabilidade - slice não altera o array original.

let nums = [1,2,3,4,5,6,7,8,9];

console.log(nums.slice(1,9)); // [2,3,4,5,6,7,8,9] (do índice 1 ao 8)
console.log(nums.slice(1)); // [2,3,4,5,6,7,8,9] (do 1 até o fim)

console.log(nums.slice(3,6)); // [4,5,6] (índices 3 a 5)

console.log(nums.slice(-2)); // [8,9] (últimos 2 elementos)
console.log(nums.slice(0,9)); // [1,2,3,4,5,6,7,8,9] (todo o array)