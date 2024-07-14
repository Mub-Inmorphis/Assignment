// Write a JavaScript function to validate whether a given value type is NaN or not.

function isNaN(value) {
  return Number.isNaN(value);
}


console.log(isNaN(123)); 
console.log(isNaN("abc")); 
console.log(isNaN(NaN)); 
console.log(isNaN(undefined)); 
