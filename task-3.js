
// make a function name is sortMaker, which will take an array as input
function sorMaker(arr) {
    // access the elements of the input array.
    const [a, b] = arr;
    // if any element is negative, return invalid input
    if (a < 0 || b < 0) {
        return 'invalid input'
    }
    // if elements are equal, then return "equal"
    if (a === b) {
        return 'equal';
    }
    // else return in ascending/descending order
    else {
        if (a > b) {
            return [a, b];
        } else {
            return [b, a];
        }
    }
}
console.log(sorMaker([-3, 5]));