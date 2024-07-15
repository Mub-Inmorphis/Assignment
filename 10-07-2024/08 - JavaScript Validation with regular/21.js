// Write a JavaScript function to print an integer with commas as thousands
// separators.
// Test Data :
// console.log(thousands_separators(1000));
// "1,000"
// console.log(thousands_separators(10000.23));
// "10,000.23"
// console.log(thousands_separators(100000));
// "100,000"

function thousandsSeparators(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

console.log(thousandsSeparators(1000));
console.log(thousandsSeparators(10000.23));
console.log(thousandsSeparators(100000));
