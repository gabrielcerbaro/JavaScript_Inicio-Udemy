// Este script mostra como usar Object.keys().
// Object.keys() retorna um array contendo os nomes das propriedades de um objeto.

let obj = {
    'chave1': 1,
    'chave2': 2,
    'chave3': 3,
}

// Exibe o objeto completo.
console.log(obj);

// Exibe apenas as chaves do objeto: chave1, chave2 e chave3.
console.log(Object.keys(obj));

let obj2 = {
    um: 1,
    dois: 2,
    tres: 3,
}

// Exibe o segundo objeto completo.
console.log(obj2);

// Exibe apenas as chaves do segundo objeto: um, dois e tres.
console.log(Object.keys(obj2));
