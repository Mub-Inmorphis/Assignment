// The Temperature Converter
// It's hot out! Let's make a converter based on the steps here.
// Create a function called celsiusToFahrenheit :
//  Store a celsius temperature into a variable.
//  Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius :
//  Now store a fahrenheit temperature into a variable.
//  Convert it to celsius and output "NN°F is NN°C.


function celsiusToFahrenheit(celsius) {
    let fahrenheit = celsius * 9/5 + 32;
    console.log(`${celsius}°C is ${fahrenheit.toFixed(1)}°F`);
}

function fahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9;
    console.log(`${fahrenheit}°F is ${celsius.toFixed(1)}°C`);
}

let celsiusTemp = 25;
let fahrenheitTemp = 77;

celsiusToFahrenheit(celsiusTemp);
fahrenheitToCelsius(fahrenheitTemp);


// already done this in JS Basic - Question No. 11
