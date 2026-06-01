const cep = /\d{5}-\d{3}/;

console.log(cep.test("12134-124"));
console.log(cep.test("111134-124"));
console.log(cep.test("1124-124"));
console.log(cep.test("1213ada4-124"));
console.log(cep.test("12134-12asa4"));

const telefone = /\(\d{2}\)\d{4,5}-\d{4}/;

console.log(telefone.test("(19)88901-1234"))
console.log(telefone.test("(19)8901-1234"))
console.log(telefone.test("(19)880901-1234"))
console.log(telefone.test("(19)88901-12304"))
console.log(telefone.test("(190)88901-1234"))