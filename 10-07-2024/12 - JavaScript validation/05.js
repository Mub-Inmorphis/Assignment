// Write a JavaScript function to validate whether a given value is number or not.

function isNumber(value) {
  return typeof value === "number" && !Number.isNaN(value);
}

console.log(isNumber(123));
console.log(isNumber("abc"));
console.log(isNumber(NaN));
console.log(isNumber(undefined));
