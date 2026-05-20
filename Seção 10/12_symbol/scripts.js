class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }

    latir(){
        console.log("Au au");
    }
}

Cachorro.prototype.raca = "SRD";

let patas = Symbol();

Cachorro.prototype[patas] = 4;

let canicorso = new Cachorro("Cani Corso", "Preto");

console.log(canicorso);

canicorso.latir();

console.log(Cachorro.prototype[patas]);

console.log(canicorso[patas]);

console.log(Cachorro.prototype.raca);