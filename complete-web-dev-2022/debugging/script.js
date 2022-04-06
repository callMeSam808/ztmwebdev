// Debugging - why the errors, why is it not working the way it should
const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    (a, b) => a.concat(b), []);

const flattened = [[0, 1], [2, 3], [4, 5]].reduce(  // reduce format
    (accumulator, array) => accumulator.concat(array), []); // accumulator starts as empty array, so [].concat

const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    (accumulator, array) => {
        console.log('array', array);
        console.log('accumulator', accumulator);
        return accumulator.concat(array);           // need to add return since we removed from single line (which implicitly means return)
    }, []);


// USING DEBUGGER
const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    (accumulator, array) => {
        debugger;           // states to stop at this point in execution
        return accumulator.concat(array);
    }, []);