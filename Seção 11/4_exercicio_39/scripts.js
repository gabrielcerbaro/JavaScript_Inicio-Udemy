class Carro {
    constructor(marca, cor, gasolinaRestante, consumo) {
        this.marca = marca;
        this.cor = cor;
        this.gasolinaRestante = gasolinaRestante;
        this.consumo = consumo;
    }

    dirigir(km){

        let kmConsumo = km / this.consumo;

        if(kmConsumo > this.gasolinaRestante) {
            console.log("Gasolina insuficiente");
            return;
        }
            this.gasolinaRestante -= kmConsumo;
            console.log("Essa é a gasolina restante: " + this.gasolinaRestante)
    }

    abastecer(gasolinaAbastecer) {
        
        if(gasolinaAbastecer === "completar") {
            this.gasolinaRestante = 100;
            console.log("Tanque completo: " + this.gasolinaRestante)
            return;
        }

        let abastecimento = this.gasolinaRestante + gasolinaAbastecer;

        if(abastecimento > 100) {
            console.log("Derramou gasolina")
            return;
        }

         this.gasolinaRestante = gasolinaAbastecer + this.gasolinaRestante;
         console.log("Carro abastecido: " + this.gasolinaRestante);
    }
}

let carro = new Carro ("Sentra", "Branco", 100, 12);

carro.dirigir(100);

carro.abastecer("completar")

carro.dirigir(10000)

carro.dirigir(100)

carro.abastecer(5)