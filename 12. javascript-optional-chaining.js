// Optional Chaining
const user = {
    id: 339,
    name: "Uzzal Roy",
    age: 42,
    education: {
        degree: "Graduate",
        school: {
            name: "Dinajpur Polytechnic Institute"
        }
    }
};

console.log(user?.education?.school?.name);