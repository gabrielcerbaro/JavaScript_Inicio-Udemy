function multiplicarTresNumeros(x, y, z) {
    return(x*y*z);
}

console.log(multiplicarTresNumeros(3,5,8));

const mult = multiplicarTresNumeros(5,3,9);

console.log("O valor de mult é: " + mult);

function podeDirigir(idade, cnh) {
    if (idade >= 18 && cnh == true) {
        console.log("Você pode dirigir");
    } else{
        console.log("Não pode dirigir");
    }
}
console.log(podeDirigir(19,true));
console.log(podeDirigir(13,false));
console.log(podeDirigir(19,false));
console.log(podeDirigir(13,true));
        