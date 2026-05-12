// Este script mostra como acessar elementos específicos de arrays usando índices.
// Estamos utilizando índices para obter valores individuais de arrays.
// Isso reforça o conceito de indexação em arrays, que começa do 0.

// Declarando arrays
let arr = [1, 2, 3, 4, 5, 6, 7];
// 'arr' é um array de números. Índices vão de 0 a 6.

let str = ["Gabriel", "Gabriela", "Cerbaro"];
// 'str' tem 3 elementos, índices 0, 1, 2.

let bool = [true, false, true];
// 'bool' com valores booleanos.

// Acessando elementos por índice
console.log(arr[1]); // Acessa o segundo elemento (índice 1)
// Dica: Sempre subtraia 1 do número ordinal para obter o índice correto.
// Princípio: Arrays são estruturas de dados eficientes para acesso aleatório.

console.log(str[3]); // Tentará acessar índice 3, que não existe (undefined)
// Dica: Verifique sempre se o índice é válido para evitar erros.
// Use arr.length para saber o tamanho.

console.log(bool[0]); // Primeiro elemento
// Dica: Índice 0 é o primeiro elemento.

console.log(arr[arr.length - 1]); // Último elemento usando a propriedade length
// 'length' é uma propriedade que retorna o número de elementos.
// Dica: arr.length - 1 dá o último índice. Isso é uma prática comum para acessar o final do array.
// Princípio: Use propriedades built-in para manipular dados de forma segura.