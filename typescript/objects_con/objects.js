"use strict";
// objects can be typed by decalaring what the object should look like in the annotation
// Accessing a property that isn't defined or performing operation without keeping types in mind will throw errors~!
// Object Type as a Function Parameter
// The function expects an object containing first and last properties.
function objectsType(person) {
    console.log(`${person.first}, ${person.last}`);
}
objectsType({ first: "Manjunath", last: "L" });
// Object Type for a Variable
// is used to define the type of a variable.
// coordinate must always be an object with x and y, both numbers.
let coordinate = { x: 34, y: 2 };
let coordinateAliases = { x: 34, y: 2 };
console.log("coordinate:", coordinate, "coordinateAliases:", coordinateAliases);
// Object Type as a Function Return Type
// This function must return an object having x and y properties of type number.
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
function randomCoordinateAliases() {
    return { x: Math.random(), y: Math.random() };
}
//Excess Property Checking.
/*
Directly passing an object literal
Object literal may only specify known properties,
and 'age' does not exist in type
'{ first: string; last: string; }'

When you pass an object literal directly, TypeScript performs Excess Property Checking.

It checks:
"Does this object contain any extra properties that aren't expected?"

objectsType({first:"king", last:"lion", age:45});
Since age is extra, TypeScript throws an error.
*/
// Storing in a variable first
/* TypeScript performs Excess Property Checking on object literals.
 When an object literal is passed directly to a function, any extra properties
 that are not defined in the target type cause an error.
 However, when the same object is first stored in a variable,
 TypeScript uses structural typing and only checks whether the required properties exist.
 Extra properties are allowed, so the function call succeeds.*/
const storeData = { first: "king", last: "lion", age: 45 };
// Here TypeScript first infers:
objectsType(storeData);
// Does storeData have at least first and last?
// contains everything required by
/* Extra properties are allowed when assigning from a variable.
This is called Structural Typing. */
// Note: But with a direct object literal, TypeScript becomes stricter because extra properties are often a typo.
// Type aliases
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
function calculatePayout(song) {
    console.log(song.numStreams);
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log(`${song.title} - ${song.artist}`);
}
const mysong = {
    title: "kullu",
    artist: "kuvempu",
    numStreams: 123454,
    credits: {
        producer: "Phil Specter",
        writer: "Alex North",
    },
};
calculatePayout(mysong);
printSong(mysong);
// z?: this will become a optional
const myPoint = { x: 1, y: 2, z: 3 };
console.log(myPoint);
const user = {
    id: 1234,
    name: "manju",
};
console.log("user:", user);
// we can not reassign a value for id because it is readonly
// user.id = 123456;
("Intersection Types");
const happyFace = {
    radius: 4,
    color: "yellow",
};
console.log("happyFace:", happyFace);
const finalUpdate = {
    radius: 2,
    color: "red",
    age: 23,
};
console.log("final update:", finalUpdate);
