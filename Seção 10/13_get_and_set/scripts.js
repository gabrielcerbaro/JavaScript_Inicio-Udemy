class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }

    latir(){
        console.log("Au au");
    }

    get getCor (){
        return this.cor;
    }

    set setCor (cor){
        this.cor = cor;
    }
}

let pastor = new Cachorro ("Pastor Alemão", "Sem cor");

pastor.setCor = "Dourado";

console.log(pastor.getCor);

console.log(pastor.cor);

console.log(pastor);