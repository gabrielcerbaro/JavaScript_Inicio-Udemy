class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }

    latir(){
        console.log("Au au");
    }
}

Cachorro.prototype.patas = 4;

let canicorso = new Cachorro("Cani Corso", 4, "Preto");

console.log(canicorso);
canicorso.latir();
console.log(canicorso.patas)