// Criamos uma Promise ja resolvida usando Promise.resolve(5).
// Isso significa que a promessa ja tem o valor final 5 disponivel.
// Se usassemos Promise.reject(5), a promessa estaria em estado de erro e precisaria de catch para tratar.
let promise = Promise.resolve(5);

// Este console.log executa primeiro porque e codigo sincrono.
// Mesmo a Promise ja estando resolvida, o then dela so sera chamado quando mandarmos abaixo.
// A frase ajuda a perceber a ordem em que as mensagens aparecem no console.
console.log("A promessa ainda não foi resolvida");

// setTimeout agenda a funcao interna para executar depois de 2 segundos.
// Isso foi escrito assim para atrasar o uso da Promise e deixar a ordem dos eventos mais visivel.
setTimeout(function () {

// Chamamos ".then()" na Promise para acessar o valor resolvido, que neste caso e 5.
// O parametro "value" recebe esse 5.
// Retornamos "value + 10", entao o proximo ".then()" recebera 15.
// Se nao retornassemos nada aqui, o proximo ".then()" receberia undefined.
promise.then((value) => {return value + 10})
    // Este segundo ".then()" recebe o valor retornado pelo then anterior.
    // Aqui "value" sera 15, e console.log mostra esse resultado usando template string.
    // Se tivessemos somado outro numero no primeiro then, a mensagem final mudaria.
    .then((value) => {console.log(`o valor da promessa é: ${value}`)});

    
// O valor 2000 representa 2 segundos de espera antes de executar a funcao do setTimeout.
// Se fosse 4000, a mensagem da Promise apareceria depois de 4 segundos.
}, 2000);
