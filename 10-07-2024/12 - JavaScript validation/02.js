// Write a JavaScript function to validate whether a given value type is error or
// not.

function isError(value) {
  return value instanceof Error;
}

const error1 = new Error("Sample error");
const error2 = TypeError("Type error");

console.log(isError(error1));
console.log(isError(error2));

console.log(isError("Not an error"));
console.log(isError(404));
console.log(isError(null));
console.log(isError(undefined));
