// A palavra-chave "async" transforma esta funcao em uma funcao assincrona.
// Mesmo que o codigo dentro dela pareca comum, uma funcao async sempre retorna uma Promise.
// Se removessemos o "async", a funcao retornaria diretamente o numero da soma, e nao uma Promise.
async function somar(a, b) {
    // "return a + b" devolve o resultado da soma dos dois parametros recebidos.
    // Como a funcao e async, esse valor sera automaticamente colocado dentro de uma Promise resolvida.
    // Se fosse "return a - b", por exemplo, o resultado prometido seria a subtracao em vez da soma.
    return a + b
};

// Aqui chamamos a funcao "somar" passando 10 para "a" e 10 para "b".
// Como "somar" e async, o resultado nao vem como numero direto; ele vem como uma Promise.
// Por isso usamos ".then()", que executa uma funcao quando a Promise for resolvida.
// O parametro "value" recebe o resultado final da Promise, neste caso 20.
// "console.log(value)" mostra esse resultado no console.
// Se tentassemos usar apenas console.log(somar(10,10)), veríamos uma Promise, nao apenas o numero 20.
somar(10,10).then((value) => console.log(value));
