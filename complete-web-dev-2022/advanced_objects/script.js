// REFERENCE TYPE
let object1 = { value : 10 };
let object2 = object1;
let object3 = { value: 10 };

object1 === object2;    // returns true
object1 === object3;    // returns false

object1.value = 15;
object2.value;      // returns 15
object3.value;      // returns 10

[] === [];      // returns false. Arrays are objects.


// CONTEXT - tells you where we are in the object
console.log(this);      // in console returns window object. "this" means what window environment we are in right now.
this.alert("hello");    // this refers to object it's inside of. same as window.alert("hello");

const object4 = {
    a: function() {
        console.log(this);      // now refers to object, not window. object4.a();
    }
}


// INSTANTIATION
class Player {                      // useful if planning to make multiple player objects.
    constructor(name, type) {
        console.log('player', this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player {       // extends adds on top of what player has.
    constructor(name, type) {
        super(name, type);           // whenever you extend a class, need super with properties you wish to access from class.
        console.log('wizard', this);
    }
    play() {
        console.log(`WEEEEEEE I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');         // new means creating new object (wizard)
const wizard2 = new Wizard('Shawn', 'Dark Magic');

wizard1.play();
wizard1.introduce();


// PASS BY VALUE VS PASS BY REFERENCE
let a = 5;
let b = a;
b++;        // a is still 5 and b is now 6. primitive types create their own space on memory.

let obj1 = {name: 'Yao', password: '123'};
let obj2 = obj1;

obj2.password = 'easypeasy';        // obj1 and obj2 password is changed to easypeasy. this is pass by reference

console.log(obj1);          // objects are stored in memory and passed by reference. values aren't copied, just the container location (in memory).
console.log(obj2);

let c = [1, 2, 3, 4, 5];
let d = c;
d.push(15631);              // arrays are objects so both c and d change (original array changes in memory)
console.log(d);
console.log(c);

let e = [1, 2, 3, 4, 5];    // clone array to new array
let f = [].concat(e);       // creates a whole new array copied (concatenated) from original array.
console.log(f);
f.push(4567);
console.log(f);
console.log(e);

let obj = {a: 'a', b: 'b', c: 'c'};     // clone object to new object
let clone = Object.assign({}, obj);     // clones the object to stated location ({}) from stated origin (obj)
let clone2 = {...obj};                  // alternative way to clone object (spread)
obj.c = 5;
console.log(clone);
console.log(obj);
console.log(clone2);

let deepObj = {
    a: 'a', 
    b: 'b', 
    c: {
        deep: 'try and copy me'
    }
};

let dClone = Object.assign({}, deepObj);
let dClone2 = {...deepObj};
// deepObj.c = 5;

// console.log(deepObj);
// console.log(dClone);
// console.log(dClone2);

// deepObj.c.deep = "hahaha";      // even though cloned, it changes in all. We did a shallow clone (only cloned first level object)
// console.log(deepObj);           // the other object in c (deep) is another object stored by reference in memory. Shallow clone references same address in all clones.
// console.log(dClone);
// console.log(dClone2);

let superClone = JSON.parse(JSON.stringify(deepObj));       // way to perform deep clone (clone all objects that may be within). parses object, converts to string, copies, then converts to obj.
deepObj.c.deep = "hahaha";                                 // JSON method for cloning can cause performance issues when parsing objects with lots of properties.
console.log(superClone);
console.log(deepObj);
console.log(dClone);
