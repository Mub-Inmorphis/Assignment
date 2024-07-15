// Write a JavaScript program to test the first character of a string is uppercase
// or not.


function isFirstCharUppercase(str) {
  return /^[A-Z]/.test(str);
}

console.log(isFirstCharUppercase("Hello"));
console.log(isFirstCharUppercase("world"));
