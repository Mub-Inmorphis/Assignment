// Write a JavaScript function to check whether a given value is hexcolor value
// or not.

function isHexColor(value) {
  const hexColorPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  return hexColorPattern.test(value);
}

console.log(isHexColor("#abc"));
console.log(isHexColor("#123456"));
console.log(isHexColor("#G12"));
