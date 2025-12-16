let idade = prompt('Qual sua idade?');

if (idade >= 18 && idade < 60) {
    console.log("Você está liberado");
} else if(idade <= 17) {
    console.log("Você não está liberado");
} else if(idade >= 60){
    console.log("Você é velho");
} else {
    console.log("Po, que idade você tem??");
} 
