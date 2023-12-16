// object tricks
const a = "version";
const country = "Bangladesh"

const language = {
    name: "JavaScript",
    year: 1995,
    creator: "Brendan Eich",
    country,
};

let keyArray = Object.keys(language);
console.log(keyArray);

let valueArray = Object.values(language);
console.log(valueArray);

let entriesArray = Object.entries(language);
console.log(entriesArray);

language.popularity = "100%";
console.log(language);

language[a] = "2016";
console.log(language);