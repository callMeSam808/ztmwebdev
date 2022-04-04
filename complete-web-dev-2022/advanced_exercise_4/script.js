// function first() {
//     const greet = "Hi";
//     function second() {
//         alert(greet);
//     }
//     return second;
// }

// const newFunc = first();
// newFunc();

const first = () => {
    const greet = "Hi";
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

// CLOSURES  - a function ran, the function executed. It's never going to execute
// again. BUT it's going to remember that there are reference to those variables 
// so the child scope always has access to the parent scope. Children always have
// access to parent scope but parent scope doesn't have access to children scope.


// CURRYING - process of taking a function that takes multiple arguments and converting to function that takes them one at a time.
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;    // think of arrows as functions
curriedMultiply(3);     // returns (b) => a * b
curriedMultiply(3)(4);      // returns 12
const multiplyBy5 = curriedMultiply(5);  // can call function with any argument to multiply by 5


// COMPOSE
const compose = (f, g) => (a) => f(g(a));  // f(g(a)) is sum(sum(5)) to sum(6) to 7.

const sum = (num) => num + 1;

compose(sum, sum)(5);


// AVOIDING SIDE EFFECTS AND FUNCTIONAL PURITY.

let a = 1;
function b() {      // This function has an effect that affects the outside world (reassigning a)
    a = 2;            // That's a side effect. Good practice to avoid these side effects
}                       // This practice is called functional purity. Keep things in their own universe.
// We want to avoid side effects and always have a return with functions.
// This makes functions deterministic: no matter what the input, return the same value.
// If function always does the same thing, decrease chances of bugs and errors.
