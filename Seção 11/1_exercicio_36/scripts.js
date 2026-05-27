// Define uma classe chamada Conta, que organiza dados e comportamentos relacionados a uma conta bancária.
class Conta {
    // O construtor é executado quando criamos um novo objeto usando a palavra-chave new.
    constructor (saldo) {
        // this.saldo cria uma propriedade no objeto para armazenar o valor do saldo.
        this.saldo = saldo;
    }

    // Método para adicionar dinheiro ao saldo.
    deposito(deposito) {
        // += soma o valor do depósito ao saldo atual.
        this.saldo += deposito;
    }

    // Método para retirar dinheiro do saldo.
    saque(saque) {
        // -= subtrai o valor do saque do saldo atual.
        this.saldo -= saque;
    }
}

// Cria uma nova instância de Conta com saldo inicial de 100.
const minhaConta = new Conta(100);

// Exibe no console o saldo atual da conta.
console.log(minhaConta.saldo);

// Chama o método deposito para aumentar o saldo em 100.
minhaConta.deposito(100);

// Chama o método saque para reduzir o saldo em 37.
minhaConta.saque(37);

// Exibe no console o saldo atualizado depois das operações.
console.log(minhaConta.saldo);