// --- DESTRUCTURING ---
// Destructuring allows us to "unpack" values from data-structures (Arrays, objects)
// into separate distinct variables.

// --------------------------------
// Basic variable assignment
const foo = ["one", "two", "three"];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"
// --------------------------------

// --------------------------------
const foo2 = ["one", "two"];

const [red1, yellow1, green1, blue] = foo2;
console.log(red1); // "one"
console.log(yellow1); // "two"
console.log(green1); // undefined
console.log(blue); //undefined
// --------------------------------

// --------------------------------
// DEFAULT VALUES
let a, b;

[a = 5, b = 7] = [1];
console.log(a); // 1
console.log(b); // 7

// --------------------------------
// Swapping variables
let a1 = 1;
let b1 = 3;

[a1, b1] = [b1, a1];
console.log(a1); // 3
console.log(b1); // 1

const arr = [1, 2, 3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1,3,2]
// --------------------------------

// --------------------------------
// Parsing an array returned from a function
function f() {
  return [1, 2];
}

let a2, b2;
[a2, b2] = f();
console.log(a2); // 1
console.log(b2); // 2
// --------------------------------

// --------------------------------
// Ignoring some returned values
function f() {
  return [1, 2, 3];
}

const [a3, , b3] = f();
console.log(a3); // 1
console.log(b3); // 3

const [c] = f();
console.log(c); // 1
// --------------------------------

// --------------------------------
// Assigning the rest of an array to a variable
const [a4, ...b4] = [1, 2, 3];
console.log(a4); // 1
console.log(b4); // [2, 3]
// --------------------------------