// Root Scope (window)
let fun = 5;

function funFunction() {
    // child scope
    let fun = "hellooo";
    console.log(1, fun);
}

function funnerFunction() {
    // child scope
    let fun = "Byee";
    console.log(2, fun);
}

function funnestFunction() {
    // child scope
    fun = "AHHHHHHH";
    console.log(3, fun);
}

console.log("window", fun);
funFunction();
funnerFunction();
funnestFunction();
console.log(fun);