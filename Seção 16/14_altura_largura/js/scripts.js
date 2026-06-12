let texto = document.querySelector("#titulo-principal");

console.log("Largura: " + texto.offsetWidth); // Considera as bordas
console.log("Altura: " + texto.offsetHeight);

console.log("Altura: " + texto.clientWidth); //Não considera as bordas
console.log("Altura: " + texto.clientHeight);