// Classe que representa uma conta bancária com conta corrente, poupança e taxa de juros.
class ContaBancaria {
    constructor(contaCorrente, contaPoupanca, juros) {
        this.contaCorrente = contaCorrente; // saldo da conta corrente
        this.contaPoupanca = contaPoupanca; // saldo da poupança
        this.juros = juros; // taxa de juros em porcentagem
    }

    // Método para depositar dinheiro na conta corrente.
    deposito(valorDeposito) {
        this.contaCorrente += valorDeposito;
        console.log("Esse é o saldo da conta: " + this.contaCorrente);
    }

    // Método para sacar dinheiro da conta corrente.
    saque(valorSaque) {
        if(valorSaque > this.contaCorrente) {
            console.log("O valor de saque é maior que o disponível.");
            return; // não permite saque maior do que o saldo
        }

        this.contaCorrente -= valorSaque;
        console.log("Esse é o saldo da conta: " + this.contaCorrente);
    }

    // Método para transferir dinheiro da conta corrente para a poupança.
    transferencia(valorTransferencia) {
        this.contaPoupanca += valorTransferencia;
        this.contaCorrente -= valorTransferencia;
        console.log("O saldo da Poupança é: " + this.contaPoupanca);
    }

    // Método para consultar o saldo de uma conta específica.
    consultarSaldo(conta) {
        if (conta === "poupança") {
            console.log("Esse é o saldo da conta poupança: " + this.contaPoupanca);
            return;
        } else {
            console.log("Esse é o saldo da conta corrente: " + this.contaCorrente);
        }
    }

    // Método para aplicar juros ao saldo da poupança.
    jurosAniversario() {
        let juros = (this.contaPoupanca * this.juros) / 100; // calcula os juros em reais
        this.contaPoupanca += juros; // adiciona os juros ao saldo da poupança
    }
}

// ContaEspecial herda todos os métodos e propriedades de ContaBancaria.
class ContaEspecial extends ContaBancaria {
    constructor(contaCorrente, contaPoupanca, juros) {
        super(contaCorrente, contaPoupanca, juros); // chama o construtor da classe pai
        this.juros = juros * 2; // dobra a taxa de juros para contas especiais
    }
}

// Cria uma conta normal com saldo corrente de 3000 e poupança de 10000.
let pessoa1 = new ContaBancaria(3000, 10000, 3);
// Cria uma conta especial com mesma quantia, mas juros em dobro.
let pessoa2 = new ContaEspecial(3000, 10000, 3);

// Deposita 500 na conta corrente de pessoa1.
pessoa1.deposito(500);

// Saca 100 da conta corrente de pessoa1.
pessoa1.saque(100);

// Tenta sacar um valor maior que o saldo disponível.
pessoa1.saque(99999);

// Transfere 1000 da conta corrente de pessoa1 para a poupança.
pessoa1.transferencia(1000);

// Consulta o saldo da poupança de pessoa1.
pessoa1.consultarSaldo("poupança");

// Consulta o saldo da conta corrente de pessoa1.
pessoa1.consultarSaldo("corrente");

// Consulta o saldo da poupança de pessoa2, que é uma conta especial.
pessoa2.consultarSaldo("poupança");

// Consulta o saldo da conta corrente de pessoa2.
pessoa2.consultarSaldo("corrente");

// Exibe a taxa de juros da conta comum.
console.log(pessoa1.juros);

// Exibe a taxa de juros da conta especial.
console.log(pessoa2.juros);

// Aplica juros na poupança de pessoa1.
pessoa1.jurosAniversario();

// Mostra o objeto pessoa1 após o retorno dos juros.
console.log(pessoa1);

// Aplica juros na poupança de pessoa2.
pessoa2.jurosAniversario();

// Mostra o objeto pessoa2 após o retorno dos juros.
console.log(pessoa2);