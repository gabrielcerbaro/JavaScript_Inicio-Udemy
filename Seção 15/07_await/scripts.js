// Esta funcao recebe dois valores, "a" e "b", para somar depois de um atraso.
// Ela nao e async, mas retorna manualmente uma Promise, que representa um resultado futuro.
function somaDelay (a,b) {
    // Criamos uma nova Promise para controlar quando a soma sera considerada pronta.
    // O parametro "resolve" e uma funcao usada para dizer que a Promise terminou com sucesso.
    // Se nao retornassemos uma Promise, nao poderiamos usar "await" corretamente depois.
    return new Promise((resolve) => {
        // "setTimeout" agenda uma funcao para rodar depois de um tempo.
        // Aqui ele simula uma operacao demorada, como buscar dados em uma API.
        setTimeout (function () {
            // Depois do atraso, resolvemos a Promise com o resultado de "a + b".
            // Isso faz quem estiver esperando essa Promise receber a soma.
            // Se resolvessemos apenas "a", o resultado futuro seria so o primeiro numero.
            resolve(a+b);
        // O numero 4000 significa 4000 milissegundos, ou seja, 4 segundos.
        // Se fosse 1000, a Promise seria resolvida depois de 1 segundo.
        }, 4000)
    })
}

// Esta funcao e async porque usaremos "await" dentro dela.
// Ela recebe tres valores: "a" e "b" serao somados com atraso, e "c" sera somado depois.
async function resolveSoma(a,b,c) {
    // Chamamos "somaDelay(a,b)" e guardamos a Promise em "x".
    // Neste momento, a soma ainda nao terminou; "x" representa um valor que chegara no futuro.
    // Se colocassemos "await" aqui, a funcao pausaria imediatamente nesta linha ate a soma terminar.
    let x = somaDelay(a,b);
    // Guardamos o terceiro valor em "y".
    // Esta linha e sincrona, ou seja, acontece imediatamente, sem esperar os 4 segundos.
    let y = c;

    // "await x" pausa esta funcao ate a Promise guardada em "x" ser resolvida.
    // Quando "x" resolver, "await x" vira o resultado de "a + b".
    // Depois somamos esse resultado com "y" e retornamos o valor final.
    // Como a funcao e async, esse retorno tambem sera entregue dentro de uma Promise.
    // Se removessemos o "await", tentaríamos somar uma Promise com um numero, gerando um resultado errado.
    return await x + y;
}

// Chamamos "resolveSoma" com 3, 4 e 5.
// Primeiro, 3 e 4 serao somados depois de 4 segundos, resultando em 7.
// Depois, 7 sera somado com 5, resultando em 12.
// Como "resolveSoma" e async, ela retorna uma Promise, entao usamos ".then()" para pegar o resultado.
// O parametro "value" recebe o valor final resolvido, e "console.log(value)" mostra 12 no console.
resolveSoma(3,4,5).then((value) => console.log(value));
