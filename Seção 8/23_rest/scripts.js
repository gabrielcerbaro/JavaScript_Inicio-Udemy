// Este script demonstra o parametro rest (...args).
// O rest permite que uma funcao receba uma quantidade variavel de argumentos.
// Dentro da funcao, esses argumentos ficam guardados em um array.

let num = 10;
let num2 = 100;
let num3 = 17;
let num4 = 1;

function imprimirNumeros (...args) {
    // Percorre todos os argumentos recebidos pela funcao.
    for (let i = 0; i < args.length; i++){
        // Exibe o argumento da posicao atual.
        console.log(args[i]);
    };
};

// Chama a funcao passando dois numeros.
imprimirNumeros(num, num2);

console.log("pause");

// Chama a mesma funcao com outros dois numeros.
imprimirNumeros(num3, num4);

console.log("pause");

// Chama a funcao com varios numeros.
// O parametro rest permite receber todos eles sem precisar declarar um parametro para cada um.
imprimirNumeros(1,2,3,4,5,6,7,8,9,0);
