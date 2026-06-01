const numbers = /[^123]/;

console.log(numbers.test("123"));
console.log(numbers.test("100002000030000"));

const intervalo = /[^0-9]/;

console.log(intervalo.test("aFAF"));
console.log(intervalo.test("100002000030000"));

const intervalo2 = /[^a-z]/;

console.log(intervalo2.test("aader"));
console.log(intervalo2.test("100002000030000"));