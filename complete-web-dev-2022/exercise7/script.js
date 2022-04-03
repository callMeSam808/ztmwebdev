let user = {
    name: "John",
    age: 34,
    hobby: "Soccer",
    isMarried: false,
    spells: ["abrakadabra", "shazam", "boo"],
    shout: function() {
        console.log("AHHHH!");
    }
};

console.log(user);
console.log(user.name);
console.log(user.age);

user.favoriteFood = "spinach";

console.log(user);

user.isMarried = true;

console.log(user);

let list = [
    {
        username: "andy",
        password: "secret",
    },
    {
        username: "jess",
        password: "123",
    },
]

console.log(list);

console.log(user.spells[1]);

console.log(list[1].password);

user.shout();  // shout is a method of user

let emptyObject = {};

let list2 = [];

console.log(emptyObject);
console.log(list2);

let nullObj = null;

console.log(nullObj);

// nullObj.name = "Andy";  // causes an error, can't do

emptyObject.name = "Andy";  // can do. empty object is not the same as null.

console.log(emptyObject.name);
console.log(emptyObject);