// Write a JavaScript function to check whether a given value is UK Post Code
// or not.

function isUKPostCode(value) {
    const ukPostCodePattern = /^(GIR|[A-Z]\d[A-Z\d]?|[A-Z]{2}\d[A-Z\d]?|\d{1,2}[A-Z]{2})\s?\d[A-Z]{2}$/i;
    return ukPostCodePattern.test(value);
}

console.log(isUKPostCode("SW1A 1AA"));
console.log(isUKPostCode("EC1A 1BB"));
console.log(isUKPostCode("W1A 1AB"));
console.log(isUKPostCode("WC1A 1AB"));
console.log(isUKPostCode("W1A1AB"));
console.log(isUKPostCode("W1 1AB"));
