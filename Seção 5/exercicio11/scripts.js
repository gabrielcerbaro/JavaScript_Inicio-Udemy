let idade = 23;
let cnh = true;

if (idade > 18 && cnh == true){
    console.log("Você está autorizado a dirigir!");
} else if (idade > 18 || cnh == true){
    console.log("Você não está autorizado a dirigir.");
} else {
    console.log("Você não tem nem um, nem outro.")
}