// funtion will receive a parameter which will be a number
function getCube(number) {
    // show error message if input is invalid
    if (typeof number !== 'number') {
        return ("Invalid input");
    }
    // covert the parameter to cube
    const cube = number ** 3;
    // return the result of the function
    return cube;
}
const number = true;
console.log(getCube(number));
