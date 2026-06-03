function somaDelay (a,b) {
    return new Promise((resolve) => {
        setTimeout (function () {
            resolve(a+b);
        }, 4000)
    })
}

async function resolveSoma(a,b,c) {
    let x = somaDelay(a,b);
    let y = c;

    return await x + y;
}

resolveSoma(3,4,5).then((value) => console.log(value));