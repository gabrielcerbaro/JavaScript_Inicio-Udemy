function saudacao(nome) {
    if(typeof nome != 'string') {
        throw new Error("O parâmetro deve ser obrigaóriamente uma string");
    } else {
        console.log(`Olá ${nome}.`);
    }
}

saudacao("Gabriel");

saudacao(5);

console.log("O código vai parar depois que entra um parâmetro errado");