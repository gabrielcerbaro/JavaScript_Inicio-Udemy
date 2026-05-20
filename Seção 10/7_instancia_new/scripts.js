function Cachorro (raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.uivar = function () {
        console.log("Auuuuuu");
    }
}

let labrador = new Cachorro("Labrador", 4, "Amarelo");

labrador.uivar();
console.log(labrador);