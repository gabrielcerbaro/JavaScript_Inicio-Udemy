function Cachorro (raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
}

Cachorro.prototype.uivar = function () {
    console.log("Auuuuu");
}

Cachorro.prototype.latir = function (){ 
    console.log("Au au");
}

let labrador = new Cachorro("Labrador", 4, "Amarelo");

labrador.uivar();
labrador.latir();
console.log(labrador);