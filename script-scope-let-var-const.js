var lang = "Bangla";

function learn(topic) {
    var lang = topic; // Var Function block access

    if (true) { // Let curly brackets block access
        //let a = 5;
        //let a = 6; // let redeclare not possible
       // a = 6; // let re-assign possible
       const a = {
        b: 6
       }
       a.b = 10;
        console.log(a)
    }

    console.log(`I am learning ${topic}`);
}

learn("Pyathon");

console.log(`I know ${lang}`);