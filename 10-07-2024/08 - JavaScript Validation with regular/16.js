// Write a JavaScript function to check whether a given value is hexadecimal
// value or not

function isHexadecimal(value) {
    const hexPattern = /^[0-9A-F]+$/i;
    return hexPattern.test(value);
}

console.log(isHexadecimal("1A3"));
console.log(isHexadecimal("FF82C0"));
console.log(isHexadecimal("G123"));
