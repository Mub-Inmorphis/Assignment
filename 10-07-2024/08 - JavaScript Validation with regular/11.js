// Write a JavaScript function to check whether a given value is time string or
// not.

function isTimeString(value) {
    const timePattern = /^([01]\d|2[0-3]):([0-5]\d)$/;
    return timePattern.test(value);
}

console.log(isTimeString("12:34"));
console.log(isTimeString("23:59"));
console.log(isTimeString("24:00"));
console.log(isTimeString("12:345"));
