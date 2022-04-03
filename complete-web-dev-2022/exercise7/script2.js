function createUser() {
    const user = {
        username: prompt("Choose a username:"),
        password: prompt("Choose a password:"),
    };
    return user;
}

function addUser(user) {
    database.push(user);
}

function addTimeline(user) {
    if (user.timeline === undefined) {
        user.timeline = prompt("What are you up to today?")
    }
    let usernameTime = user.username;
    let userTimeLine = user.timeline;
    newsFeed.push({username: usernameTime, timeline: userTimeLine});
}

database = [

];

newsFeed = [
    
];

while (newsFeed.length < 3) {
    const user = createUser();
    addUser(user);
    addTimeline(user);
}

console.log(database);
console.log(newsFeed);