// Este script mostra como criar e usar um objeto em JavaScript.
// Objetos agrupam dados em pares de chave e valor.

let cachorro = {
    // Propriedade que guarda a quantidade de patas.
    patas: 4,

    // Propriedade que guarda o nome do cachorro.
    nome: "Thor",

    // Metodo do objeto: uma funcao guardada dentro do objeto.
    latir: function() {
        console.log("Au Au");
    }
};

// Acessa propriedades usando a notacao de ponto.
console.log(cachorro.patas);
console.log(cachorro.nome);

// Executa o metodo latir do objeto cachorro.
cachorro.latir();
