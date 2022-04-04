// let array = [1, 2, 10, 16];

// const newArray = array.forEach((num) => {
//     num * 2;
// });

// console.log(newArray);  // returns undefined. forEach goes through each number and multiplies by 2.
                        //  we are not changing the array, however.

let array = [1, 2, 10, 16];

const doubleArray = []
const newArray = array.forEach(num => {
    doubleArray.push(num * 2);
});

console.log('forEach', doubleArray); 


// MAP, FILTER, REDUCE
// MAP
const mapArray = array.map(num => num * 2);   // map allows us to loop over each number and return array.
// map always needs/has return element.

console.log('map', mapArray);


// FILTER
const filterArray = array.filter(num => num > 5);

console.log('filter', filterArray);


// REDUCE
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num;
}, 0);                                          // Specify accumulator value at the end.

console.log('reduce', reduceArray);