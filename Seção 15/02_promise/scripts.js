let promise = Promise.resolve(5);

console.log("A promessa ainda não foi resolvida");

setTimeout(function () {

promise.then((value) => {return value + 10})
    .then((value) => {console.log(`o valor da promessa é: ${value}`)});

    
}, 2000);