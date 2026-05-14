// Este script mostra como acessar valores especificos dentro de arrays.
// Em JavaScript, o primeiro item de um array fica no indice 0.

let arr = [1, 2, 3, 4, 5, 6, 7];
let str = ["Gabriel", "Gabriela", "Cerbaro"];
let bool = [true, false, true];

// Acessa o segundo numero do array, pois o indice 1 representa a segunda posicao.
console.log(arr[1]);

// Tenta acessar o indice 3 do array de strings.
// Como esse array so tem indices 0, 1 e 2, o resultado sera undefined.
console.log(str[3]);

// Acessa o primeiro valor booleano do array.
console.log(bool[0]);

// arr.length informa quantos itens existem no array.
// Subtraindo 1, chegamos ao indice do ultimo elemento.
console.log(arr[arr.length - 1]);
