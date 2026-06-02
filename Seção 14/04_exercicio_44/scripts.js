const validarIp = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;

console.log(validarIp.test("127.0.0.1"));
console.log(validarIp.test("127.0.0."));
console.log(validarIp.test("127..0.1"));
console.log(validarIp.test("127.0..1"));
console.log(validarIp.test(".0.0.1"));
console.log(validarIp.test("aaa.0.0.1"));
console.log(validarIp.test("12.0.0.1"));
console.log(validarIp.test("127.01.0.1"));
console.log(validarIp.test("127.0.01.1"));
console.log(validarIp.test("127.0.0.31"));
console.log(validarIp.test("127.0.0.1"));
