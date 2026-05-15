const gabriel = { 
    role: "Programador",
}

console.log(Object.getPrototypeOf(gabriel));

console.log(Object.getPrototypeOf(gabriel) === Object.prototype);

console.log(gabriel.hasOwnProperty("role"));