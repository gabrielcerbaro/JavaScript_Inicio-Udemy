function numberCheck(num) {
    let number = Number(num);

    if(Number.isNaN(number)) {
        alert("Por favor passe apenas números")
    } else {
        return number;
    }
}

let inputNumber = prompt("Escreva um número");

numberCheck(inputNumber);