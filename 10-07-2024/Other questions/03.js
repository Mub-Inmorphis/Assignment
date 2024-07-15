// Write a JavaScript function to extract unique characters from a string
// “thequickbrownfoxjumpsoverthelazydog”.

function extractUniqueCharacters(str) {
    let uniqueChars = Array.from(new Set(str)).join('');
    return uniqueChars;
}

console.log(extractUniqueCharacters("thequickbrownfoxjumpsoverthelazydog"));
