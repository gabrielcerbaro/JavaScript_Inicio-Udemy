// Cria um objeto chamado calculadora para agrupar as operacoes matematicas.
let calculadora = {

    // Metodo que recebe dois numeros e mostra a soma deles no console.
    soma: function(num1, num2) {
            console.log(num1 + num2);
    },

    // Metodo que recebe dois numeros e mostra a subtracao no console.
    subtracao: function(num1, num2) {
            console.log(num1 - num2);
    },

    // Metodo que recebe dois numeros e mostra a multiplicacao no console.
    multiplicacao: function(num1, num2) {
            console.log(num1 * num2);
    },

    // Metodo que recebe dois numeros e mostra a divisao no console.
    divisao: function(num1, num2) {
            console.log(num1 / num2);
    }
};

// Chama cada metodo da calculadora passando dois valores como exemplo.
calculadora.soma(1,2);
calculadora.subtracao(2,3);
calculadora.multiplicacao(4,5);
calculadora.divisao(6,2);
