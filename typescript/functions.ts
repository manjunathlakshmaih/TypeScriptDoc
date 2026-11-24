// In TypeScript, a function is a block of code that performs a specific task.
// TypeScript functions are similar to JavaScript functions, but you can specify data types 
// for parameters and return values.

function greet(name: string): void {
    console.log("Hello " + name);
}

// function → keyword to create a function.
// greet → function name.
// name: string → parameter name must be a string.
// : void → function does not return anything.
// "This function is only for performing an action, not for returning data."?
greet("Manjunath");

function anhhhyType(text: number) {
  console.log(text * text);
}

anhhhyType(123);

// anhhhyType("string");
// anhhhyType(true);

//return type annotation
function square(num: number):number {
  return num * num;
}

//Arrow function
const add = (x: number, y: number): number => {
  return x+ y;
}
square(2)

// Never Type
// "This function will never successfully finish or return a value."
// The never type represents values that NEVER occur. we might use it to annotate a function that always
// throws an exception or function that never finishes executing
// Note: Void returns undefined or null, which technically still a type of value. with never a function doesn't even finish executing

function errMessage(msg: string): never {
  throw new Error(msg);
}