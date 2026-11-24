// union types 

let age: number | string | boolean = 21;
age = 23;
age = "manju";

type Pointss = {
    X: number,
    Y: number
}

type Loc = {
    A: number,
    B: number
}

let coordinates: Pointss | Loc = {X:1, Y: 34};
coordinates = {A: 23.333, B: 34.3333};

console.log(coordinates);

// Type Narrowing with union types
function printAge (age: string | number) {
    console.log(`my age is ${age}`);
}

printAge(26);
printAge("29");