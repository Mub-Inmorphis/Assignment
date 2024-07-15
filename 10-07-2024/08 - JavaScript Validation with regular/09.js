// Write a JavaScript function to check whether a given value is an valid url or
// not.

    
function isValidURL(url) {
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlPattern.test(url);
}

console.log(isValidURL("https://www.example.com"));
console.log(isValidURL("ftp://ftp.example.com/file.txt"));
console.log(isValidURL("invalid-url"));