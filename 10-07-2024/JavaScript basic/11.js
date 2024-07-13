// Write a JavaScript program to convert temperatures to and from celsius, 
// fahrenheit. Formula : c/5 = (f-32)/9 
// [ where c = temperature in celsius and f = temperature in fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C


function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

function fahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}

let tempCelsius = 60;
let tempFahrenheit = 45;

// Convert Celsius to Fahrenheit
let convertedToFahrenheit = celsiusToFahrenheit(tempCelsius);
console.log(`${tempCelsius}°C is ${convertedToFahrenheit}°F`);

// Convert Fahrenheit to Celsius
let convertedToCelsius = fahrenheitToCelsius(tempFahrenheit);
console.log(`${tempFahrenheit}°F is ${convertedToCelsius}°C`);
