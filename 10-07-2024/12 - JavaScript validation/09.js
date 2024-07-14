// Write a JavaScript function to validate whether a given value type is char or not.

function isChar(value) {
  return typeof value === "string" && value.length === 1;
}

console.log(isChar("a"));
console.log(isChar("abc")); 
console.log(isChar("")); 
console.log(isChar(123));
