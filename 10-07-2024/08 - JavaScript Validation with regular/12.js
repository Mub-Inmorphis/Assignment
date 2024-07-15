// Write a JavaScript function to check whether a given value is US zip code or
// not.

function isUSZipCode(value) {
    const zipCodePattern = /^\d{5}(?:-\d{4})?$/;
    return zipCodePattern.test(value);
}

console.log(isUSZipCode("12345"));
console.log(isUSZipCode("12345-6789"));
console.log(isUSZipCode("1234"));
console.log(isUSZipCode("123456-7890"));
