// Destructuring
const user = {
    id: 339,
    name: "Uzzal Roy",
    age: 42,
    education: {
        degree: "Graduate"
    }
};

const { name, age } = user;
console.log(name, age);

const { education } = user;
console.log(education);

const { education: { degree } } = user;
console.log(degree);