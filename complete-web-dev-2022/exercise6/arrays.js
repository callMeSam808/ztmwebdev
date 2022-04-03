let list = ["tiger", "cat", "bear", "bird"];
console.log(list[1]);
console.log(list[0]);

let shiftedItem = list.shift();
let poppedItem = list.pop();
console.log(list);

list.push("elephant");
console.log(list);

let newList = list.concat(["deer", "bee"]);
console.log(newList);

list.sort();
newList.sort();

console.log(list);
console.log(newList);

let numbers = [1,2,3,4];

let booleans = [true, false, true];

let functionList = [function apple() {
    console.log("apple");
}]

let mixedList = ["apples", 3, undefined, true, function apple() {
    console.log("apples")
}];  // not advised due to performance issues //

let arrayInArray = [
    ["tiger", "cat", "bear", "bird"]
];

console.log(arrayInArray[0][3]);

let exerciseArray = ["Banana", "Apples", "Oranges", "Blueberries"];

exerciseArray.shift();
console.log(exerciseArray);

exerciseArray.sort();
console.log(exerciseArray);

exerciseArray.push("Kiwi");
console.log(exerciseArray);

exerciseArray.splice(0, 1);
console.log(exerciseArray);

exerciseArray.reverse();
console.log(exerciseArray);

let exerciseArray2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

console.log(exerciseArray2[1][1]);
console.log(exerciseArray2[1][1][0]);