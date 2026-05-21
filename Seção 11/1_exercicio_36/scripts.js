class Conta {
    constructor (saldo) {
        this.saldo = saldo;
    }

    deposito(deposito) {
        this.saldo += deposito;
    }

    saque(saque) {
        this.saldo -= saque;
    }
}

const minhaConta = new Conta(100);

console.log(minhaConta.saldo);

minhaConta.deposito(100);

minhaConta.saque(37);

console.log(minhaConta.saldo);