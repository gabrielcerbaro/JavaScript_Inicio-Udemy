const validarUsuario = /^[\w-]{3,16}$/;

console.log(validarUsuario.test("gabriel"));
console.log(validarUsuario.test("gabriel1"));
console.log(validarUsuario.test("gabriel-"));
console.log(validarUsuario.test("gabriel_"));
console.log(validarUsuario.test("gabriel,"));
console.log(validarUsuario.test("gabriel."));
console.log(validarUsuario.test("gabriellllllllllllllllllllll"));
console.log(validarUsuario.test("ga"));