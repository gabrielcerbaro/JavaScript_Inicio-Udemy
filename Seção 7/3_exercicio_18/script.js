function somaNumeros (x, y) {

    if (y == undefined || x == undefined) {
        console.log("é obrigatório ter dois parâmetros para dar seguimento");
        return;
    }

      return console.log(x + y);
}

somaNumeros(1);
somaNumeros(1, 5);
somaNumeros(4, 6);
somaNumeros(100, 1);