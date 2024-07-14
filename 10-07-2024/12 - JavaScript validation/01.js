// Write a JavaScript function to validate whether a given value type is boolean
// or not.

function isBoolean(a) {
  return typeof a === 'boolean';
}

var lightOn = true;

console.log(isBoolean(true));
console.log(isBoolean("false"));
console.log(isBoolean(false));
console.log(isBoolean(2));
