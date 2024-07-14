// Write a JavaScript function to check whether given value types are same or not.

function areSameType(value1, value2) {
  return typeof value1 === typeof value2;
}

console.log(areSameType(123, "abc"));
console.log(areSameType(true, false));
console.log(areSameType({}, []));
console.log(areSameType(null, undefined));
