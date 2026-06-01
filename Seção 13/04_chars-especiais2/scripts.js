const ano = /\d\d\d\d/;

console.log(ano.test("2026"));
console.log(ano.test("20"));
console.log(ano.test("20194"));
console.log(ano.test("2024rfsf"));

const peloMenosTresLetras = /\w\w\w/;

console.log(peloMenosTresLetras.test("as"));
console.log(peloMenosTresLetras.test("zfaz"));
console.log(peloMenosTresLetras.test("222o"));
console.log(peloMenosTresLetras.test("da523g24242"));