
// a function will take 2 arguments
function matchFinder(string1, string2) {
// it will validate the two arguments are string or not
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        // if it doesn't receive string one or two arguments it will show this error message;
        return ("Please enter a string as parameter");
    }
    // it will find the match between two strings
    const result = string1.includes(string2);
    // it will return boolean value
    return result;
}
        
console.log(matchFinder('mkmunna khan', 'mk'));
console.log(matchFinder('mkmunna khan', 'khan'));
console.log(matchFinder('mkmunna khan', 25));
console.log(matchFinder('mkmunna khan', 'khann'));
