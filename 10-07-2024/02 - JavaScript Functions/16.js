// Write a JavaScript function to extract unique characters from a string.
function extractUniqueCharacters(str) {
  return [...new Set(str)].join("");
}
console.log(extractUniqueCharacters("thequickbrownfoxjumpsoverthelazydog"));
