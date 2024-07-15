// Write a JavaScript program to search a date within a string.

function findDateInString(str) {
    const datePattern = /\b\d{1,2}\/\d{1,2}\/\d{4}\b|\b\d{4}-\d{2}-\d{2}\b/g;
    return str.match(datePattern);
}

console.log(findDateInString("Meeting on 05/25/2023 and 2023-06-15."));
