let database = [
    {
        username: "andrei",
        password: "supersecret"
    },
    {
        username: "sally",
        password: "123"
    },
    {
        username: "ingrid",
        password: "777"
    }
];

let newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning"
    },
    {
        username: "Sally",
        timeline: "Javascript is soooooo cool!"
    }
];

function isUserValid(user, pass) {
    for (let i=0; i < database.length; i++) {
        if (database[i].username === user && 
            database[i].password === pass) {
            return true;
        }
    }
    return false;
}

function signIn(user, pass) {
    if (isUserValid(user, pass)) {
        console.log(newsFeed); 
    } else {
        alert("Sorry, wrong username and password!");
    }
}


let userNamePrompt = prompt("What's your username?");
let passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt, passwordPrompt);