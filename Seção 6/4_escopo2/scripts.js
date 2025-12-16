// if, for e  while criam escopos em JavaScript e por isso as variáveis
// declaradas dentro desses blocos não são acessíveis fora deles.

let nome = "Matheus";
let sobrenome = "Soares";

if (true) {
    let nome = "Gabriel";
    console.log(nome); // Gabriel
}

console.log(nome); // Matheus

for (let i = 0; i < 5; i++) { 
    let sobrenome = "Silva";
    console.log(sobrenome); // Silva
}   

console.log(sobrenome); // Soares