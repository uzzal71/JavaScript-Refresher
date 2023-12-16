// Destructuring
const user = {
    id: 339,
    name: "Uzzal Roy",
    age: 42,
    education: {
        degree: "Graduate",
        school: {
            school_name: "Dinajpur Polytechnic Institute"
        }
    }
};

const { name, age } = user;
console.log(name, age);

const { education } = user;
console.log(education);

const { education: { degree } = {} } = user;
console.log(degree);

const { education: { school: school_name } = {} } = user;
console.log(school_name);