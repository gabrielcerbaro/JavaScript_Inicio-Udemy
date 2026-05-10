function soma(a,b) {
    if (a === undefined || b === undefined) {
        console.log("Para executar esta função precisa dos dois argumentos");
    } else {
        return (a + b);
    }
}

console.log(soma(1));
console.log(soma(3, 4));

function saudacao (nome, idade) {
    if (idade === undefined) {
        console.log("Olá " + nome);
    } else {
        console.log("Olá seu nome é " + nome + " e você tem " + idade + " anos");
    }
}

console.log(saudacao("Gabriel"));
console.log(saudacao("Gabriel", 24));