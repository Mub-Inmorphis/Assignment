// The Geometrizer
// Create 2 functions that calculate properties of a circle, using the definitions here.
// Create a function called calcCircumfrence :
//  Pass the radius to the function.
//  Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea :
//  Pass the radius to the function.
//  Calculate the area based on the radius, and output "The area is NN".


const calcCircumference = (r) => {
    let circumference = 2 * Math.PI * r;
    console.log(`The circumference is ${circumference.toFixed(2)}`);
}
const calcArea = (r) => {
    let area = Math.PI * r * r;
    console.log(`The circumference is ${area.toFixed(2)}`);
}

let radius1 = 5;
let radius2 = 7.5;
let radius3 = 10;

calcCircumference(radius1);
calcArea(radius1);

calcCircumference(radius2);
calcArea(radius2);

calcCircumference(radius3);
calcArea(radius3);