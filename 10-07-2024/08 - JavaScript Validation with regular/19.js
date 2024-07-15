// Write a JavaScript function to check whether a given value is html or not.

function isHTML(value) {
    const htmlPattern = /<\/?[a-z][\s\S]*>/i;
    return htmlPattern.test(value);
}

console.log(isHTML("<p>Hello World</p>"));
console.log(isHTML("Plain text"));
