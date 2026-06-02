function verificarNumero(num) {
    return new Promise((resolve, reject) => {
        if (num == 2) {
            resolve(console.log(`O número é ${num}`));
        } else {
            reject(new Error("Deu errado porque o número não é 2"));
        }
    });
}

verificarNumero(2);
verificarNumero(3);