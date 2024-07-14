// Write a JavaScript function to validate whether a given value type is pure json object or not.

function isJSONObject(value) {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    return false;
  }
  return Object.getPrototypeOf(value) === Object.prototype;
}

console.log(isJSONObject({}));
console.log(isJSONObject({ key: "value" }));
console.log(isJSONObject([]));
console.log(isJSONObject(null));
console.log(isJSONObject("string"));
