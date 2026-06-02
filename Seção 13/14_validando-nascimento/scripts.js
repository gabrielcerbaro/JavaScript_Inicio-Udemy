const nascimento = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;

console.log(nascimento.test("21/04/2002"));
console.log(nascimento.test("1/04/2002"));
console.log(nascimento.test("21/0/2002"));
console.log(nascimento.test("21/04/202"));
console.log(nascimento.test("299/04/2002"));
console.log(nascimento.test("21/046/2002"));
console.log(nascimento.test("29/04/29824"));
console.log(nascimento.test("/04/2002"));
console.log(nascimento.test("21//2002"));
console.log(nascimento.test("21/04/"));
