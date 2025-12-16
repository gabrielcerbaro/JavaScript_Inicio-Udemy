function multiplicarTresNumeros(x, y, z){
    return x * y * z;
}   

console.log(multiplicarTresNumeros(4, 7, 9)); // 252
console.log(multiplicarTresNumeros(2, 3, 5)); // 30 
console.log(multiplicarTresNumeros(1, 6, 8)); // 48


function podeDirigir(idade, cnh){
    if(idade >= 18 && cnh == true){
        console.log("Pode dirigir");
    } else {
        console.log("Não pode dirigir");
    } 
}

console.log(podeDirigir(20, true)); // Pode dirigir
console.log(podeDirigir(16, true)); // Não pode dirigir
console.log(podeDirigir(22, false)); // Não pode dirigir            

// 0 e 1 são valores falsy em JavaScript
console.log(podeDirigir(18, 1)); // Pode dirigir 
console.log(podeDirigir(18, 0)); // Não pode dirigir