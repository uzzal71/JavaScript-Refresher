// Spread & Rest Operator
const fruits = ["Banana", "Orange"];

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