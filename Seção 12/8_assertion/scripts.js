let arr = [1,2,3,4,5,6];
let arr2 = [];

function iterarArray(arr) {
    if(arr.length == 0) {
        throw new Error("O array precisa ter pelo menos um elemento");
    } else {
        for(let i = 0; i < arr.length; i++) {
            console.log(i);
        }
    }
}

// function arrayVazio(arr) {
//     if(arr.length > 0) {
//         throw new Error("O array precisa estar vazio");
//     } else {
//         console.log("Agora com o array vazio funciona");
//     }
// }

iterarArray(arr);
iterarArray(arr2);

// arrayVazio(arr2);
// arrayVazio(arr);

