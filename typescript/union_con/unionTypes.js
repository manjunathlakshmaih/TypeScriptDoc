"use strict";
// union types 
let age = 21;
age = 23;
age = "manju";
let coordinates = { X: 1, Y: 34 };
coordinates = { A: 23.333, B: 34.3333 };
console.log(coordinates);
// Type Narrowing with union types
function printAge(age) {
    console.log(`my age is ${age}`);
}
printAge(26);
printAge("29");
