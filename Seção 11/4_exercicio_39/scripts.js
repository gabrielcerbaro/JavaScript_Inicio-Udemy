// Define uma classe Carro para representar um veículo com marca, cor, combustível e consumo.
class Carro {
    constructor(marca, cor, gasolinaRestante, consumo) {
        this.marca = marca; // marca do carro
        this.cor = cor; // cor do carro
        this.gasolinaRestante = gasolinaRestante; // quanto combustível ainda há no tanque
        this.consumo = consumo; // consumo em km por litro
    }

    // Método para simular dirigir uma distância em quilômetros.
    dirigir(km){
        // Calcula quantos litros serão usados para a distância.
        let kmConsumo = km / this.consumo;

        // Verifica se há combustível suficiente.
        if(kmConsumo > this.gasolinaRestante) {
            console.log("Gasolina insuficiente");
            return; // encerra o método sem alterar o estado do carro
        }

        // Diminui a gasolina restante de acordo com o consumo.
        this.gasolinaRestante -= kmConsumo;
        console.log("Essa é a gasolina restante: " + this.gasolinaRestante);
    }

    // Método para abastecer o carro.
    abastecer(gasolinaAbastecer) {
        // Se a instrução for "completar", enche o tanque até 100.
        if(gasolinaAbastecer === "completar") {
            this.gasolinaRestante = 100;
            console.log("Tanque completo: " + this.gasolinaRestante);
            return; // encerra após completar o tanque
        }

        // Calcula o novo valor de gasolina se adicionar a quantidade indicada.
        let abastecimento = this.gasolinaRestante + gasolinaAbastecer;

        // Se passar de 100, considera derramamento e não atualiza o tanque.
        if(abastecimento > 100) {
            console.log("Derramou gasolina");
            return;
        }

        // Atualiza o combustível restante com o valor do abastecimento.
        this.gasolinaRestante = gasolinaAbastecer + this.gasolinaRestante;
        console.log("Carro abastecido: " + this.gasolinaRestante);
    }
}

// Cria um objeto carro com marca Sentra, cor branca, tanque cheio e consumo de 12 km/l.
let carro = new Carro("Sentra", "Branco", 100, 12);

// Tenta dirigir 100 km. Isso consome 100 / 12 litros de gasolina.
carro.dirigir(100);

// Usa a opção de completar o tanque.
carro.abastecer("completar");

// Tenta dirigir 10000 km, o que provavelmente falta combustível.
carro.dirigir(10000);

// Tenta dirigir mais 100 km.
carro.dirigir(100);

// Abastece mais 5 litros.
carro.abastecer(5);