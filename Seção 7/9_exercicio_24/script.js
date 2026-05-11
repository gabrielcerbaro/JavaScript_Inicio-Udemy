function expoente (x, y) {

    if (x === undefined || y === undefined) {
        console.log("Coloque dois números para dar sequência na exponenciação")
    } else {
        console.log(Math.pow(x, y));
    }
    
}

expoente(2, 4);
expoente(2, 2);
expoente(5, 2);
expoente(7, 2);
