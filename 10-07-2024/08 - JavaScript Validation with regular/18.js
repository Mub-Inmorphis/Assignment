// Write a JavaScript function to check whether a given value represents a
// domain or not. 

function isDomain(value) {
    const domainPattern = /^[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;
    return domainPattern.test(value);
}

console.log(isDomain("example.com"));
console.log(isDomain("subdomain.example.co.uk"));
console.log(isDomain("not_a_domain"));
