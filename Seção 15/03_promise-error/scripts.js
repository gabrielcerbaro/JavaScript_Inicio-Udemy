// Criamos uma Promise resolvida com um objeto Error como valor.
// Importante: Promise.resolve(new Error(...)) nao gera rejeicao; ela apenas entrega um Error como valor normal.
// Se quisessemos que o catch fosse executado, deveriamos usar Promise.reject(new Error(...)).
let promise = Promise.resolve(new Error("Algo deu errado no código"));

// Este console.log executa imediatamente e avisa que veremos algo relacionado a erro abaixo.
// Ele aparece antes do setTimeout porque codigo sincrono roda antes do codigo agendado.
console.log("Esse código aqui ta com erro, veja o erro acontecer abaixo");

// setTimeout agenda a funcao interna para rodar depois de 2 segundos.
// O atraso serve para separar visualmente a mensagem inicial do processamento da Promise.
setTimeout(function (){
    // Chamamos ".then()" para receber o valor resolvido da Promise.
    // Como a Promise foi criada com Promise.resolve, este then sera executado mesmo o valor sendo um Error.
    // O console.log mostrara o objeto Error no console.
    promise.then((value) => console.log(value))
        // ".catch()" so executa quando a Promise e rejeitada ou quando algum erro acontece em um then anterior.
        // Neste codigo, ele provavelmente nao sera chamado, porque a Promise foi resolvida, nao rejeitada.
        // Se a linha inicial usasse Promise.reject(...), este catch mostraria a mensagem "A falha e: ...".
        .catch(reason => console.log("A falha é: " + reason))
// O valor 2000 representa 2 segundos.
// Se removessemos o setTimeout, o then seria configurado imediatamente, mas ainda depois do console.log inicial.
}, 2000);
