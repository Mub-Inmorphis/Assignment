// Write a JavaScript program to pass a 'JavaScript function' as parameter.
function greet(name) {
  return "Hello, " + name;
}

function callFunction(fn, arg) {
  return fn(arg);
}

console.log(callFunction(greet, "World"));
