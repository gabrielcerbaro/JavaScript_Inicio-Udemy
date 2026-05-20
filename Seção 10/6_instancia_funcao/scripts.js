function criarCachorro (raca, cor, patas) {
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.cor = cor;
    cachorro.patas = patas;
    cachorro.latir = function(){
        console.log("Au au");
    };
    return cachorro;
}

let golden = criarCachorro("Golden retriever", "Amarelo", 4);

console.log(golden);
golden.latir();