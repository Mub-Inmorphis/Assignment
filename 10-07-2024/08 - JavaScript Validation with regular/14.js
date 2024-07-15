// Write a JavaScript function to check whether a given value is Canada Post
// Code or not.

function isCanadaPostCode(value) {
    const canadaPostCodePattern = /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ](\s)?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i;
    return canadaPostCodePattern.test(value);
}

console.log(isCanadaPostCode("K1A 0B1"));
console.log(isCanadaPostCode("B2N 1J4"));
console.log(isCanadaPostCode("T5A 1A1"));
console.log(isCanadaPostCode("ABC123"));
