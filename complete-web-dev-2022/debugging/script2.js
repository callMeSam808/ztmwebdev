//Question 1: Clean the room function: given an input of
//[1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these
//into individual array that is ordered. For example answer(ArrayFromAbove)
//should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make
//it so it organizes strings differently from number types. i.e. [1, "2", "3",
//2] should return [[1,2], ["2", "3"]]

let input = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]

function cleanRoom (array) {
    array.sort();
    console.log(array);
    let finalArray = [];
    let sliceStart = 0;
    for (let i = 0; i < array.length; i++) {
        console.log(array[i], array[i+1]);
        if (array[i] !== array[i+1]) {
            let slicedArray = array.slice(sliceStart, i+1);
            console.log(typeof slicedArray);
            console.log(slicedArray);
            finalArray.push(slicedArray);
        } else {
            continue;
        }
    }
}

cleanRoom(input);