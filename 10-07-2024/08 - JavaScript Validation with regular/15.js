// Write a JavaScript function to check whether a given value is a social security
// number or not.

function isSocialSecurityNumber(value) {
    const ssnPattern = /^\d{3}-\d{2}-\d{4}$/;
    return ssnPattern.test(value);
}

console.log(isSocialSecurityNumber("123-45-6789"));
console.log(isSocialSecurityNumber("123456789"));
console.log(isSocialSecurityNumber("123-456-789"));
