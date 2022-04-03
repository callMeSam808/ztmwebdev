let toDos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy!"
];

for (let i=0; i < toDos.length; i++) {
    console.log(i, toDos[i] + "!");
}

console.log(toDos);

for (let i=0; i < toDos.length; i++) {
    toDos[i] = toDos[i] + "!";
}

console.log(toDos);

let toDosLength = toDos.length;
for (let i=0; i < toDosLength; i++) {
    console.log(i);
    toDos.pop();
}

console.log(toDos);

let counterOne = 0;
while (counterOne < 10) {
    console.log(counterOne);
    counterOne++;
}

let counterTwo = 10;
while (counterTwo > 10) {
    console.log("while", counterTwo);
    counterTwo--;
}

let counter1 = 10;
do {
    console.log("do while", counter1);
    counter1--;
} while (counter1 > 10);

let toDos2 = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy!"
];

let toDos3 = [
    "clean room!",
    "brush teeth!",
    "exercise!",
    "study javascript!",
    "eat healthy!!"
];

toDos2.forEach(function(todo, i) {
    console.log(todo, i);
});

for (let i=0; i < toDos2.length; i++) {
    console.log(toDos2[i], i);
}


toDos2.forEach(logTodos);
toDos3.forEach(logTodos);

function logTodos(todo, i) {
    console.log(todo, i);
}