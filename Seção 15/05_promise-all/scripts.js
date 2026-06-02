const p1 = Promise.resolve("Promise 1");

const p2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("Promise 2");
    }, 3000);
});

const p3 = new Promise((resolve, reject) => {
    resolve("Promise 3");
});

Promise.all([p1,p2,p3]).then((values) => console.log(values));


