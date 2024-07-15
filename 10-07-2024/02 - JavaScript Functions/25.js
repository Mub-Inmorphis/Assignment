// Write a JavaScript function that accept a list of country names as
// input and returns the longest country name as output.

function longestCountryName(countries) {
  return countries.reduce(
    (longest, country) => (country.length > longest.length ? country : longest),
    ""
  );
}
console.log(
  longestCountryName(["Australia", "Germany", "United States of America"])
);
