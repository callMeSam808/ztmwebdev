// LET AND CONST

// const player = "bobby";
// let experience = 100;
// let wizardLevel = false;

// if (experience > 90) {
//     let wizardLevel = true;
//     console.log('inside', wizardLevel);
// }

// console.log('outside', wizardLevel);

const obj = {           // can't reassign obj (obj = 5) but can add/remove/reassign properties (obj.player = "Sam")
    player: 'bobby',
    experience: 100,
    wizardLevel: false
}


// DESTRUCTURING

// const player = obj.player;
// const experience = obj.experience;
// let wizardLevel = obj.wizardLevel;

const { player, experience } = obj;  // same as above code but cleaner/quicker
let { wizardLevel } = obj;


// OBJECT PROPERTIES

const name = 'john snow';

const person = {            // can be used to calculate property value before assigning to object
    [name]: 'hello',            // dynamic property values
    ['ray' + 'smith']: 'hihi',
    [1 + 2]: 'what'
}

const a = "Simon";
const b = true;
const c = {};

// const newObj = {
//     a: a,
//     b: b,
//     c: c
// }

const newObj = {        // same as above code but cleaner/quicker
    a, b, c
}


// TEMPLATE STRINGS

const firstName = "Sally";
const age = 34;
const pet = "horse";


// const greeting = "Hello " + name + " you seem to be doing " + pet + "!";

const greeting = `Hello ${firstName}, you are ${age - 10}. What a nice ${pet} you have!`;


//  DEFAULT ARGUMENTS

function greet(firstName='', age=30, pet='cat') {
    return `Hello ${firstName}, you are ${age - 10}. What a nice ${pet} you have!`;
}

greet("John", 50, "monkey");


// SYMBOL JAVASCRIPT TYPE

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

sym2 === sym3;  // returns false, Symbol is used to create a completely unique type


// ARROW FUNCTIONS

function add(a, b) {
    return a + b;
}

const add = (a, b) => a + b;    // same as above function. With single return can just have on one line
