// Criamos a constante "p1" com uma Promise ja resolvida.
// O valor final dessa Promise e a string "Promise 1".
// Como ela ja esta resolvida, nao precisa esperar tempo nenhum para entregar seu valor.
const p1 = Promise.resolve("Promise 1");

// Criamos a constante "p2" com uma nova Promise.
// Diferente de p1, esta Promise sera resolvida manualmente dentro de um setTimeout.
const p2 = new Promise(function(resolve, reject) {
    // setTimeout agenda a funcao interna para rodar depois de 3 segundos.
    // Isso faz p2 demorar mais que as outras Promises.
    setTimeout(function() {
        // Depois de 3 segundos, chamamos resolve com a string "Promise 2".
        // Isso marca p2 como concluida com sucesso.
        // Se chamassemos reject aqui, Promise.all falharia e nao entregaria o array final no then.
        resolve("Promise 2");
    // O valor 3000 significa 3 segundos.
    // Se fosse 0, p2 ainda seria assincrona, mas resolveria quase imediatamente.
    }, 3000);
});

// Criamos a constante "p3" com outra Promise.
// Aqui foi usada arrow function em vez de function tradicional; as duas funcionam neste caso.
const p3 = new Promise((resolve, reject) => {
    // p3 e resolvida imediatamente com a string "Promise 3".
    // O parametro reject existe porque a estrutura da Promise permite falha, mas ele nao e usado aqui.
    resolve("Promise 3");
});

// Promise.all recebe um array de Promises e espera todas terminarem com sucesso.
// A ordem do array final segue a ordem passada aqui: p1, p2 e p3.
// Mesmo p2 sendo a mais demorada, o resultado dela ainda aparece na segunda posicao do array.
// Se qualquer uma dessas Promises fosse rejeitada, o then nao rodaria e seria necessario usar catch.
Promise.all([p1,p2,p3]).then((values) => console.log(values));

