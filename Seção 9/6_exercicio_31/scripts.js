let arr = [1,2,3,4,5,6,7,8,9];
let lista = [9,8,7,6];

function verificaNumeros (arr) {

    if (arr.length < 5) {
        console.log("Poucos elementos");
    } else {
        console.log("Muitos elementos");
    }
};

verificaNumeros(arr);
verificaNumeros(lista);