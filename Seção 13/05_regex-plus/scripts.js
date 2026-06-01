const umOuMaisNumeros = /\d+/;

console.log(umOuMaisNumeros.test("12342154252152"));
console.log(umOuMaisNumeros.test("12"));
console.log(umOuMaisNumeros.test("aadadadada"));
console.log(umOuMaisNumeros.test(" "));
console.log(umOuMaisNumeros.test("1"));
console.log(umOuMaisNumeros.test("13143"));