const email = /\w+@\w+\.\w/;

console.log(email.test("gabrielcerbaro@gmail.com"));
console.log(email.test("gabrielcerbaro@12.com"));
console.log(email.test("@gmail.com"));
console.log(email.test("gabrielcerbaro@.com"));
console.log(email.test("gabrielcerbaro@gmail"));
console.log(email.test("gabrielcerbaro@gmail.12"));