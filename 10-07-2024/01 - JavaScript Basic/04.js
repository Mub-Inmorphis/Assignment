// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.

function areaTriangle(a, b, c) {
  // used Heron's formula to find out the Area of Triangle
  var s = (a + b + c) / 2;
  var area = Math.sqrt(s * ((s - a) * (s - b) * (s - c)));
  console.log(Math.floor(area));
}

areaTriangle(5, 6, 7);
