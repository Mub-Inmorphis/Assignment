// Write a JavaScript function to find the first not repeated character.
function firstNonRepeatedCharacter(str) {
  for (let char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char;
    }
  }
  return null;
}
console.log(firstNonRepeatedCharacter("abacddbec"));
