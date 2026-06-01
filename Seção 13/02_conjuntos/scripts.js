const reg1 = /[12345]/;

console.log(reg1.test("temos o número 6"));
console.log(reg1.test("temos o número 65"));
console.log(reg1.test("temos o número 4"));
console.log(reg1.test("temos o número 4345"));

const reg2 = /[0-9]/;

console.log(reg2.test("Temos o número 8547854539002372352357023765235"));
console.log(reg2.test("temos número"));