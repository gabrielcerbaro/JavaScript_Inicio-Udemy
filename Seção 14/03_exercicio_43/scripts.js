const marca = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(marca.test("Marca: Nike"));
console.log(marca.test("Nike"));
console.log(marca.test("Marca:"));
console.log(marca.test("Marca: Adidas"));
console.log(marca.test("Marca: 13134"));