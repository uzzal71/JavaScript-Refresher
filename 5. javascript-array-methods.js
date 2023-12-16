// array methods
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

// find
// Return: value
// main array don't change
let result = fruits.find((fruit) => fruit === "Orange");
result = fruits.find((fruit) => fruit === "Orange" || fruit === "Mango"); // any one value match then return maching value return
// findIndex
// Return: opsition
// main array don't change
result = fruits.findIndex((fruit) => fruit === "Orange");
console.log(result);

// Filter
// Return: multiple value
// main array don't change
result  = fruits.filter((fruit) => fruit === "Orange" || fruit === "Mango")
console.log(result);

// slice
// start & ending need
// Return: multiple value
// main array don't change
result  = fruits.slice(2, 4);
console.log(result);

// splice
// index & onOfRemovedItems need
// Return: multiple value
// main array change
result  = fruits.splice(2, 2);
console.log(result);
console.log(fruits);
result  = fruits.splice(2, 2, "Pineapple", "Poteto", "Grapes");
console.log(result);
console.log(fruits);

// array concat
// Return: multiple value
// main array don't change
result = fruits.concat("Strawberry", "Watermelon");
console.log(result);
console.log(fruits);
result = fruits.concat(["Peach", "Sweet Lime"]);
console.log(result);
console.log(fruits);

// splice
// Return: opsition
// main array change
result = fruits.push("Cherry")
console.log(result);
console.log(fruits);

// map
// Return: opsition
// main array don't change
result = fruits.map((fruit) => fruit === "Cherry")
console.log(result);
console.log(fruits);

result = fruits.map((fruit) =>`${fruit} - `);
console.log(result);
console.log(fruits);

// reduce
// Return: total sumation
// main array don't change
const numbers = [1, 2, 3, 4, 5];
result = numbers.reduce((total, currentValue) => total + currentValue, 0);
console.log(result);

// forEach
numbers.forEach((number) => {
    console.log(number);
});

// for of
// itarable: string, array
for(number of numbers) {
    console.log(number);
}
