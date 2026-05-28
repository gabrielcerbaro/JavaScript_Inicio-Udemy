let b = 2;

try {

    let a = 3 + b;

} catch(error) {

    console.log(error);
} finally {

    console.log("Executa independente se o try and catch deu erro ou não");
}
