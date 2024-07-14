// Write a JavaScript program to get the volume of a Cylinder with four decimal
// places using object classes.
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder


function cylinderVol (r, h) {

    let v = Math.PI * (r*r) * h

    console.log(v.toFixed(2));

}

cylinderVol(2, 4);