// Write a JavaScript function to validate whether a given value is object or not.

function isObject(value) {
  return value !== null && typeof value === "object";
}

console.log(isObject({}));
console.log(isObject(null));
console.log(isObject([]));
console.log(isObject("string"));
console.log(isObject(123));
