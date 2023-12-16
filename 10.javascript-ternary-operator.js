// Ternary Operator
const a = 6;
let result;

if(a % 2 === 0) {
    result = "Even";
} else {
    result = "Odd";
}
console.log(result);

// shortcut
result = a % 2 === 0 ? "New Even" : "New Odd";
console.log(result)