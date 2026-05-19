const gabriel = { 
    role: "Programador",
}

// console.log(Object.getPrototypeOf(gabriel));

// // console.log(Object.getPrototypeOf(gabriel) === Object.prototype);

// console.log(gabriel.hasOwnProperty("role"));

const gabrielcerbaro = Object.create(gabriel);

console.log(gabrielcerbaro.role);

console.log(gabrielcerbaro.hasOwnProperty("role"));

console.log(Object.getPrototypeOf(gabrielcerbaro) === gabriel);
