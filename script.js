// Spread & Rest Operator
const fruits = ["Banana", "Orange"];
const fruitObjectArray = [
    {name: "Uzzal"},
    {nmae: "Sujon"}
]

const language = {
    name: "JavaScript",
    year: 1995,
    creator: "Brendan Eich",
};

// Sperad Operator
let result = [...fruits];
console.log(result);

result.push("Pineapple");
console.log(result)
console.log(fruits);

let result2 = [...fruitObjectArray];
console.log(result2);