// Write a JavaScript function that returns a passed string with letters in
// alphabetical order.

function alphabetizeString(str) {
  return str.split("").sort().join("");
}

console.log(alphabetizeString("hello"));
