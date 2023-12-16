// object tricks
const language = {
    name: "JavaScript",
    year: 1995,
    creator: "Brendan Eich",
};

let keyArray = Object.keys(language);
console.log(keyArray);

let valueArray = Object.values(language);
console.log(valueArray);

let entriesArray = Object.entries(language);
console.log(entriesArray);