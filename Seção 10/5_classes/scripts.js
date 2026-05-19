const cachorro = {
    patas: 4,
    raca: "SRD",
    latir: function () {
        console.log("Au au");
    }
};

let golden = Object.create(cachorro);

golden.raca = "Golden Retriever";

console.log(golden.raca);
console.log(cachorro.raca);

let shitzu = Object.create(cachorro);

shitzu.raca = "Shitzu";

console.log(shitzu.raca);

cachorro.latir();
golden.latir();
shitzu.latir();