// Este script demonstra o metodo slice().
// slice() copia uma parte do array e retorna um novo array.
// O array original nao e modificado.

let nums = [1,2,3,4,5,6,7,8,9];

// Copia do indice 1 ate antes do indice 9.
console.log(nums.slice(1,9));

// Copia do indice 1 ate o final do array.
console.log(nums.slice(1));

// Copia do indice 3 ate antes do indice 6.
console.log(nums.slice(3,6));

// Com numero negativo, conta a partir do final do array.
// -2 pega os dois ultimos elementos.
console.log(nums.slice(-2));

// Copia do indice 0 ate antes do indice 9, ou seja, todos os itens neste caso.
console.log(nums.slice(0,9));
