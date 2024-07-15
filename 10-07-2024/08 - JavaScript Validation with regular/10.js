// Write a JavaScript function to check whether a given value is alpha numeric
// or not.


function isAlphaNumeric(value) {
    const alphaNumericPattern = /^[a-zA-Z0-9]+$/;
    return alphaNumericPattern.test(value);
}

console.log(isAlphaNumeric("Hello123"));
console.log(isAlphaNumeric("12345"));
console.log(isAlphaNumeric("Hello World"));
