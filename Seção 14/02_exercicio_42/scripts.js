const id = /\d+ID\b/;

console.log(id.test("ID"));
console.log(id.test("5555ID"));
console.log(id.test("5555"));
console.log(id.test("aaaa"));
console.log(id.test("aaaaID"));
