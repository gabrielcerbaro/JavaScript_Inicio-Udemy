function negativeNumber (number) {

    if (number > 0) {
        console.log("Por gentileza coloque um número negativo para prosseguir");
    } else {
        console.log(Math.abs(number));
    }
}

negativeNumber(10);
negativeNumber(-9);
negativeNumber(55);
negativeNumber(-79);


function positiveNumber (number1) {
    return console.log(Math.abs(number1));
}

positiveNumber(10);
positiveNumber(-9);
positiveNumber(55);
positiveNumber(-79);