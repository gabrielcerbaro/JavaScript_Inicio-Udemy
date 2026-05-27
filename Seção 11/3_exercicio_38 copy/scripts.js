class Carro {
    constructor(marca, cor, gasolinaRestante) {
        this.marca = marca;
        this.cor = cor;
        this.gasolinaRestante = gasolinaRestante;
    }

    dirigir(gasolinaUsar){

       for (let i = this.gasolinaRestante; i >= this.gasolinaRestante - gasolinaUsar; i--) 
        console.log(i);

       this.gasolinaRestante = this.gasolinaRestante - gasolinaUsar
       
       console.log("Essa é a gasolina restante " + this.gasolinaRestante);
    }

    abastecer(gasolinaAbastecer) {
        let abastecimento = this.gasolinaRestante + gasolinaAbastecer;

        if(abastecimento > 100) {
            console.log("Derramou gasolina")
        } else {
            console.log("Carro abastecido: " + abastecimento);
        }

         this.gasolinaRestante = gasolinaAbastecer + this.gasolinaRestante;
    }
}

let carro = new Carro ("Sentra", "Branco", 100);

carro.dirigir(30);

carro.abastecer(29)