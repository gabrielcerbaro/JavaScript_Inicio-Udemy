const cachorro = {
    raca: "None",
    latir: function(){
        console.log("Au au");
    },
    uivar: function(){
        console.log("Auuuuuuuu");
    },
    setRaca: function (raca) {
        this.raca = raca;
    },
    getRaca: function () {
        return "A raça é: " + this.raca;
    }
}

console.log(cachorro.raca);

cachorro.setRaca("Golden Retriever");

console.log(cachorro.raca);

console.log(cachorro.getRaca());