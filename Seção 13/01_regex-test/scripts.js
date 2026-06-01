const reg1 = new RegExp("Gabriel");

console.log(reg1.test("Gabriel Cerbaro"));
console.log(reg1.test("Não é meu nome"));

const reg2 = /Gabriel/;

let text = "O gabrtieladajdlasdj";
let text2 = "jadhnadnakGabrieladksadnasda";

console.log(reg2.test("Gabriel Cerbaro"));
console.log(reg2.test("Gab Cerbaro"));
console.log(reg2.test(text));
console.log(reg2.test(text2));


console.log(/gabriel/.test("O gabriel MORA AQUI"));
console.log(/sophia/.test("o gabriel mora aqui"));