// Write a JavaScript program that work as a trim function (string) using regular
// expression.

function customTrim(str) {
    return str.replace(/^\s+|\s+$/g, "").replace(/\s+/g, " ");
}

console.log(customTrim("  hello   world  "));
