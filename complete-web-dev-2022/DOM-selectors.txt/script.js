// document.getElementsByTagName("h1");
// document.getElementsByClassName("second")[0];  // creates array because elements, access first with [0]
// document.getElementById("first");  // grabs only one element, can only have one ID

// document.querySelector("h1");  // grabs like css selectors. Grabs only first one in case of repetition
// document.querySelectorAll("li");
// document.querySelectorAll("li, h1"); // grabs all of both and returns as one nodeList

// document.querySelector("li").getAttribute("random");
// document.querySelector("li").setAttribute("random", "1000");

// document.querySelector("h1").style.background = "#222222";  // will add an inline style to tag

// let h1 = document.querySelector("h1");
// console.log(h1);

// h1.className = "coolTitle";
// console.log(h1);

// document.querySelector("li").classList;

// document.querySelector("li").classList.add("coolTitle");

// document.querySelector("li").classList.remove("coolTitle");

// document.querySelector("li").classList.toggle("coolTitle");
// document.querySelector("li").classList.toggle("coolTitle");

// document.querySelector("h1").innerHTML = "<strong>!!!!!</strong>";

// document.querySelectorAll("li")[1];  // Jello
// document.querySelectorAll("li")[1].parentElement;  // the ul
// document.querySelectorAll("li")[1].parentElement.parentElement;  // the body

// document.querySelectorAll("li")[1].parentElement.parentElement.children;  // get all children of body (h1, p, ul)

// // CACHE selectors in variables rather then execute same instruction to select. Less code and more efficient.
// let h1 = document.querySelector("h1");  // can use h1 over and over instead of document instruction over and over.

// const button = document.getElementsByTagName("button")[0];
// console.log(button);

// // button.addEventListener("click", function() {
// //     console.log("CLICK!!!");
// // })

// // button.addEventListener("mouseenter", function() {
// //     console.log("CLICK!!!");
// // })

// button.addEventListener("mouseleave", function() {
//     console.log("CLICK!!!");
// })

const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    let li = document.createElement("li");  // createElement gives tag we want to make
    li.appendChild(document.createTextNode(input.value));  // createTextNode is needed to display text
    ul.appendChild(li);                                    // input.value gives value of input
    input.value = "";
    addDeleteButton(li);
}

function createDeleteButton(item) {
    let button = document.createElement("button");
    button.appendChild(document.createTextNode("delete"));
    button.id = item.innerHTML;
    button.classList.add("delete");
    enableDelete(button);
    item.appendChild(button);
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
};

function addListAfterKeypress(event) {  // listen for keyCode for keypress
    if (inputLength() > 0 && event.code === "Enter") {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

const listItems = document.querySelectorAll("li");

for (const item of listItems) {
    createDeleteButton(item);
    item.addEventListener("click", function() {
        item.classList.toggle("done");
    });
}

const deleteButtons = document.querySelectorAll(".delete");

for (const button of deleteButtons) {
    button.addEventListener("click", function() {
        button.parentElement.remove();
    });
}

function addDeleteButton(item) {
    createDeleteButton(item);
    item.addEventListener("click", function() {
        item.classList.toggle("done");
    });
}

function enableDelete(button) {
    button.addEventListener("click", function() {
        button.parentElement.remove();
    });
}