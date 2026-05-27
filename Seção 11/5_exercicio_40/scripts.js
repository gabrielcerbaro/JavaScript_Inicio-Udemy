class ContaBancaria { 
    constructor(contaCorrente, contaPoupanca, juros) {
        this.contaCorrente = contaCorrente;
        this.contaPoupanca = contaPoupanca;
        this.juros = juros;
    }

    deposito(valorDeposito) {
        this.contaCorrente += valorDeposito;
        console.log("Esse é o saldo da conta: " + this.contaCorrente);
    }

    saque(valorSaque) {
        if(valorSaque > this.contaCorrente) {
            console.log("O valor de saque é maior que o disponível.")
            return;
        }

        this.contaCorrente -= valorSaque;
        console.log("Esse é o saldo da conta: " + this.contaCorrente)
        
    }

    transferencia(valorTransferencia) {
        this.contaPoupanca += valorTransferencia;
        this.contaCorrente -= valorTransferencia;
        console.log("O saldo da Poupança é: " + this.contaPoupanca);
    }

    consultarSaldo(conta) {
        if (conta === "poupança") {
            console.log("Esse é o saldo da conta poupança: " + this.contaPoupanca);
            return;
        } else {
            console.log("Esse é o saldo da conta corrente: " + this.contaCorrente);
        }
    }
}

class ContaEspecial extends ContaBancaria {
    constructor(contaCorrente, contaPoupanca, juros) {
        super(contaCorrente, contaPoupanca, juros);
        this.juros = juros * 2;
    }
}

let pessoa1 = new ContaBancaria (3000, 10000, 3);
let pessoa2 = new ContaEspecial (3000, 10000, 3);

pessoa1.deposito(500);
pessoa1.saque(100);
pessoa1.saque(99999); 
pessoa1.transferencia(1000);
pessoa1.consultarSaldo("poupança");
pessoa1.consultarSaldo("corrente");
pessoa2.consultarSaldo("poupança");
pessoa2.consultarSaldo("corrente");

console.log(pessoa1.juros); 
console.log(pessoa2.juros); 
