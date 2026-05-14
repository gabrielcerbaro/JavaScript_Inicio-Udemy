// Este script demonstra destructuring em arrays.
// Destructuring permite pegar valores de um array e guardar em variaveis separadas.

let numeros = [1,2,3,4];

// Cada variavel recebe o valor da posicao correspondente do array.
// num1 recebe 1, num2 recebe 2, num3 recebe 3 e num4 recebe 4.
let [num1, num2, num3, num4] = numeros;

// Exibe os quatro valores extraidos do array.
console.log(num1,num2,num3,num4);
