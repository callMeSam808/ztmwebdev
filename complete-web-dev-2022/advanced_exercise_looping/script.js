// FOR OF FOR IN LOOPS
// Iterating - arrays, strings
const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000,
}

//1
for ( let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
}

//2
basket.forEach(item => {
    console.log(item);
});

// FOR OF
// iterable, doesn't work with objects
for (item of basket) {
    console.log(item);
}

// FOR IN (works with objects to loop through object properties)
// enumerating - going through properties of object (object properties are enumerable = allows us to see the properties)
for (item in detailedBasket) {
    console.log(item);
    console.log(detailedBasket[item]);
}

// arrays are like objects where under the hood are the index of each item. so for in works on arrays.
for (item in basket) {
    console.log(item);
}