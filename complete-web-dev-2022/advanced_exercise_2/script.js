// condition ? expr1 : expr2;

function isUserValid(bool) {
    return bool;
}

let answer = isUserValid(true) ? "You may enter" : "Access Denied";  // ternary is good when there are two outcomes (if/else)

let automatedAnswer =
        "Your account # is " + ( isUserValid(false) ? "1234" : "not available");

function condition() {
    if(isUserValid(true)) {
        return "You may enter";
    } else {
        return "Access denied";
    }
}

let answer2 = condition();


function moveCommand(direction) {
    let whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a monster";
            break;
        case "back":
            whatHappens = "you arrived home";
            break;
        case "right":
            whatHappens = "you found a river";
            break;
        case "left":
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}