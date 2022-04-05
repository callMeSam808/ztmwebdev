// ES8
// STRING PADDING
.padStart()
.padEnd()

'Turtle'.padStart(10);      // creates extra padding so, including turtle, equals 10 length.
'Turtle'.padEnd(10);        // creates extra padding at end.


// TRAILING COMMAS IN FUNCTIONS, PARAMETER LISTS AND CALLS
const fun = (a,b,c,d,) => {     // syntactic helper when you have tons of parameters listed downward.
    console.log(a);
}

fun(1,2,3,4,)       // still works


Object.values
Object.entries
Object.keys     // allows iteration through object properties like it's an array.

let obj = {
    username0: 'Santa',
    username1: 'Rudolf',
    username2: 'Mr.Grinch'
}

Object.keys(obj).forEach((key, index) => {        // old way.
    console.log(key, obj[key]);
});

// object.values and object.entries make it easier.
Object.values(obj).forEach(value => {       // iterates values
    console.log(value);
});

Object.entries(obj).forEach(value => {      // iterates entries
    console.log(value);
});

Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '');
})


// ASYNC AWAIT
