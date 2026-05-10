// Em JS duas variaveis podem ter o mesmo nome,
// mas o escopo delas deve ser diferente exemplo:

let gabriel = "Gabriel fora da função";

function nomeGabriel() {
    let gabriel = "Gabriel dentro da função";
    console.log(gabriel);
}

nomeGabriel(); // Gabriel dentro da função
console.log(gabriel); // Gabriel fora da função