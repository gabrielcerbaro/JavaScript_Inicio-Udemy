// Este script ilustra o uso de propriedades em JavaScript.
// Propriedades são características ou atributos de objetos que armazenam valores.
// Aqui, estamos acessando a propriedade 'length' de strings e arrays.

// Declarando uma string
let nome = "Gabriel";
// Strings são objetos imutáveis em JavaScript.
// Dica: Use propriedades como length para obter informações sobre a string.

console.log(nome.length); // Propriedade length retorna o número de caracteres
// 'length' é uma propriedade read-only que conta caracteres.
// Dica: Útil para validações, como verificar se uma string tem pelo menos X caracteres.
// Princípio: Propriedades encapsulam dados, permitindo acesso controlado.

let arr = [1, 2, 3, 4, 5, 6, 7];
// Arrays também têm a propriedade length.

console.log(arr.length); // Número de elementos no array
// Dica: Use length para loops ou verificações de tamanho.

console.log(arr[`length`]); // Usando notação de colchetes para acessar a propriedade
// Notação de colchetes permite acesso dinâmico.
// Dica: Útil quando o nome da propriedade é uma variável ou string dinâmica.

console.log(arr[1]); // Acessando um elemento do array por índice
// Isso é diferente de propriedade; é acesso a um valor específico.
// Dica: Combine propriedades e índices para manipular arrays eficientemente.
// Princípio: Separe responsabilidades: propriedades para metadados, índices para dados.