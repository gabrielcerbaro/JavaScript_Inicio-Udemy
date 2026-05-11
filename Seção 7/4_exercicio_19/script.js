function randomNumber (limit) {
    return Math.floor(Math.random() * limit) + 1;
}

console.log(randomNumber(10));
console.log(randomNumber(2));
console.log(randomNumber(100));