let novoElemento = document.createElement("p");
let texto = document.createTextNode("Texto colocado em JavaScript");

novoElemento.appendChild(texto);

let elementoAlvo = document.querySelector("#titulo-principal");
let elementoPai = document.querySelector("#container2");

elementoPai.insertBefore(novoElemento, elementoAlvo);