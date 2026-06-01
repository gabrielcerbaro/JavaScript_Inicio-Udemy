const regexPonto = /./;

console.log(".");
console.log(regexPonto.test("1233"));
console.log(regexPonto.test("1233asdada"));
console.log(regexPonto.test(" "));
console.log(regexPonto.test("qarfaf"));

const wRegex = /\w/;

console.log("w");
console.log(wRegex.test("1233"));
console.log(wRegex.test("1233asdada"));
console.log(wRegex.test(" "));
console.log(wRegex.test("qarfaf"));

const regexW = /\W/;

console.log("W");
console.log(regexW.test("1233"));
console.log(regexW.test("1233asdada"));
console.log(regexW.test(" "));
console.log(regexW.test("qarfaf"));

const dRegex = /\d/;

console.log("d");
console.log(dRegex.test("1233"));
console.log(dRegex.test("1233asdada"));
console.log(dRegex.test(" "));
console.log(dRegex.test("qarfaf"));

const regexD = /\D/;

console.log("D");
console.log(regexD.test("1233"));
console.log(regexD.test("1233asdada"));
console.log(regexD.test(" "));
console.log(regexD.test("qarfaf"));

const sRegex = /\s/;

console.log("s");
console.log(sRegex.test("1233"));
console.log(sRegex.test("1233asdada"));
console.log(sRegex.test(" "));
console.log(sRegex.test("qarfaf"));

const regexS = /\S/;

console.log("S");
console.log(regexS.test("1233"));
console.log(regexS.test("1233asdada"));
console.log(regexS.test(" "));
console.log(regexS.test("qarfaf"));
