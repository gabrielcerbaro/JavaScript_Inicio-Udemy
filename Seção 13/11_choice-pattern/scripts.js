const nomes = /[?\w+:](Gabriel|Gabriela|Sophia)/;

console.log(nomes.test("Nome: Gabriel"));
console.log(nomes.test("Nome: Matheus"));
console.log(nomes.test("Nome: Gabriela"));
console.log(nomes.test("Nome: Sophia"));
console.log(nomes.test("Gabriel"));
console.log(nomes.test("Matheus"));
console.log(nomes.test("Gabriela"));
console.log(nomes.test("Sophia"));