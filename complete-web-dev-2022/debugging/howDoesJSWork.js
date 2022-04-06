// What is a program?
// -allocate memory
// -parse and execute
// Javascript engine is implemented by each browser (V8 on chrome). Reads JS and turns into machine executable instructions.
// engine is made up of Memory Heap and Call Stack

// MEMORY HEAP
const a = 1;    // allocated memory in Memory Heap
const b = 10;
const c = 100;

// Memory Heap is limited. By having a variable just laying around and not doing anything, it's using up memory.
// Global variables can fill up the memory heap if we don't clean them up. This is a memory leak.

// CALL STACK
console.log('1');
console.log('2');
console.log('3');      // reads each line and console logs. then moves on

const one = () => {
    const two = () => {
        console.log('4');
    }
    two();
}

one();

// call stack:
// one()    first stack

// two()    next stack gets placed on top
// one()

// two() - console.log('4')     runs the top of call stack
// one()

// one()    completed console log and two(), so deletes from top of call stack

//  then removes the one() since it's done


// JS is a single-threaded language that can be non-blocking
// single threaded means it can have only one call stack only. one thing at a time gets done.
// first in last out.
// multithreaded languages can have multiple call stacks. Can create issues when running multiple call stacks like deadlock.
// synchronous means lines get executed one at a time. console.log('2') can't execute until console.log('1') finishes.
// stack overflow is when the stack gets to big and overflows.
// recursion example (creates stack overflow)
function foo() {
    foo()
};
foo();  // a function that calls itself. keeps looping to call itself and add to call stack over and over.

// JS is single threaded, so lines execute one at a time.
// having a single line that has to do a lot of work can slow things up, especially for following instructions.
// JS can be non-blocking so if this happens, the later instructions can still run.
// asynchronous is a behavior so later code doesn't have to wait for long code.
// asynchronous example
console.log('1');
setTimeout(() => {
    console.log('2');
}, 2000);            // 2000ms to wait
console.log('3');   // returns 1, 3, then after a couple seconds, 2.

// For JS to run (with memory heap and call stack) we need JS Run-Time Environment
// part of the browser. Has Web APIs (DOM, AJAX, Timeout), Callback Queue, and Event Loop

// CALL STACK
// calls and completes console.log('1')
// when setTimeout is called, it triggers Web API (Timeout is a web API)

// WEB API
// setTimeout is removed from call stack and added to Web API
// starts timer so that in 2 seconds (2000ms) it must do something
// because call stack is empty, moves to console.log('3') and executes
// when 2 seconds are up, setTimeout is done, so calls console.log('2'). This is a callback.

// CALLBACK QUEUE (event listeners, onDone, onClick, etc)
// we have to run what was in setTimeout and am ready (console.log('2'))

// EVENT LOOP
// checks all the time if the call stack is empty. if so, check callbacks.
// now, the callback (console.log('2')) is put into call stack and runs.

console.log('1');
setTimeout(() => {
    console.log('2');
}, 0);            
console.log('3');   // returns 1, 3, and then 2 with no delay.