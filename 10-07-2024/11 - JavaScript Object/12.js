// Write a JavaScript function to parse an URL.
// Sample Object :
// console.log(parse_URL('https://github.com/pubnub/python/search?utf8=%E2%9C%93&q=python
// '));
// Expected Output :
// [object Object] {
// file: "search",
// hash: "",
// host: "github.com",
// params: [object Object] {
// q: "python",
// utf8: "%E2%9C%93"
// },
// path: "/pubnub/python/search",
// port: "",
// protocol: "https",
// query: "?utf8=%E2%9C%93&q=python",
// relative: "/pubnub/python/search?utf8=%E2%9C%93&q=python",
// segments: ["pubnub", "python", "search"],
// source: "https://github.com/pubnub/python/search?utf8=%E2%9C%93&q=python"
// }

function parse_URL(url) {
    let parsedUrl = new URL(url);
    console.log(parsedUrl);
    let pathname = parsedUrl.pathname;
    let segments = pathname.split('/').filter(segment => segment !== '');

    let searchParams = {};
    parsedUrl.searchParams.forEach((value, key) => {
        searchParams[key] = value;
    });

    let parsedObject = {
        file: segments[segments.length - 1] || "",
        hash: parsedUrl.hash || "",
        host: parsedUrl.host || "",
        params: searchParams,
        path: pathname || "",
        port: parsedUrl.port || "",
        protocol: parsedUrl.protocol.replace(':', '') || "",
        query: parsedUrl.search || "",
        relative: parsedUrl.pathname + parsedUrl.search || "",
        segments: segments,
        source: parsedUrl.href || ""
    };

    return parsedObject;
}

console.log(parse_URL('https://github.com/pubnub/python/search?utf8=%E2%9C%93&q=python'));
