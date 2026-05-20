class Mamifero {
    constructor (patas) {
        this.patas = patas;
    }
}

let ovelha = new Mamifero(4);

console.log(ovelha);

class Cachorro extends Mamifero {
    constructor(patas, raca) {
        super(patas, patas);
        this.raca = raca;
    };

    uivar() {
        console.log("Auuuuu")
    }
}

let golden = new Cachorro (4, "Golden Retriever");

console.log(golden);

golden.uivar();

console.log(new Cachorro instanceof Mamifero);

console.log(golden instanceof Mamifero);