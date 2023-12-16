/**
 * JavaScript regular function by default return undefine, when you didn't return anythings 
 */

// regular function
function hello() {
    console.log("Hello world!");
}

let msg = hello();
console.log(msg);

// function expression
const hello = function() {
    console.log("Hello world");
}

// named function exprepression
const hello = function hello() {
    console.log("Hello world");
}

// arrow function
const hello = () => {
    console.log("Hello world");
}

const hello = () => 5;