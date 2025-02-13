// Function expecting a string but receives a number
function greet(name) {
  if (typeof name !== 'string') {
    console.error('Type Error: Expected a string');
    return;
  }
  console.log(`Hello, ${name}!`);
}

// Improper type passed
greet(123); // Type Error: Expected a string

// Function expecting a number but receives an array
function calculateSquare(number) {
  if (typeof number !== 'number') {
    console.error('Type Error: Expected a number');
    return;
  }
  return number * number;
}

// Improper type passed
const result = calculateSquare([4]); // Type Error: Expected a number
console.log(result); // undefined

// Implicit type coercion causing logic issues
const isAdult = (age) => age >= 18;

// Improper usage
console.log(isAdult("21")); // true (string coerced to number)

// Type mismatch in addition operation
const add = (a, b) => a + b;

// Improper usage
const sum = add(5, "10"); // Result: '510' (string concatenation instead of addition)
console.log(sum);

// Returning inconsistent types
function getData(condition) {
  if (condition) {
    return 42; // Number
  }
  return "Error"; // String
}

// Improper handling of return value
const data = getData(false);
console.log(data.toFixed(2)); // TypeError: data.toFixed is not a function

// Improper type handling in comparisons
const compare = (a, b) => {
  if (a == b) {
    console.log("Values are equal.");
  } else {
    console.log("Values are not equal.");
  }
};

// Improper usage
compare(0, false); // Values are equal (loose equality allows type coercion)
compare(null, undefined); // Values are equal (loose equality allows type coercion)
