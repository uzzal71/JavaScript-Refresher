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

let resultLang = {
    ...language
};
console.log(resultLang);

// Rest Operator
function sum(...rest) {
    return rest.reduce((total, currentValue) => total + currentValue, 0);
}
console.log(sum(5, 6, 10, 7, 9));

function sum2(text, ...rest) {
    const result = rest.reduce((total, currentValue) => total + currentValue, 0);
    console.log(`${text} ${result}`);
}
sum2('This sum is: ', 5, 6, 10, 7, 9);