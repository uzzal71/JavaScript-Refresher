// primitive vs reference: 
// primitive: String, Number, Boolean, Undefined, Null
// reference: object, array, Function

let x = 5;
let y = 6;

x = y;
y = 7;

console.log(x);
console.log(y);

let a = ["JS", "Python"];
let b = ["HTML", "CSS"];
b = a;
console.log(a);
console.log(b);
a.push("Go");
console.log(a);
console.log(b);