let promise = Promise.resolve(new Error("Algo deu errado no código"));

console.log("Esse código aqui ta com erro, veja o erro acontecer abaixo");

setTimeout(function (){
    promise.then((value) => console.log(value))
        .catch(reason => console.log("A falha é: " + reason))
}, 2000);