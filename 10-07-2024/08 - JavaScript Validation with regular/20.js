// Write a JavaScript function to check a given value contains alpha, dash and
// underscore.

function hasAlphaDashUnderscore(value) {
    const pattern = /^[a-zA-Z_-]+$/;
    return pattern.test(value);
}

console.log(hasAlphaDashUnderscore("alpha_dash"));
console.log(hasAlphaDashUnderscore("alpha_dash123"));
