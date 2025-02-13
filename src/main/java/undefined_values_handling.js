// Example 1: Accessing potentially undefined properties
function accessUndefinedProperty(obj) {
  // Incorrect: Direct access without checking
  console.log(obj.name.length); // Throws TypeError if `name` is undefined

  // Correct: Using optional chaining
  console.log(obj?.name?.length || 0); // Outputs 0 if `name` or `name.length` is undefined
}

// Example 2: Passing undefined arguments to a function
function greet(name) {
  // Incorrect: Assumes `name` is always defined
  console.log("Hello, " + name.toUpperCase()); // Throws TypeError if `name` is undefined

  // Correct: Handle undefined with default values
  console.log("Hello, " + (name?.toUpperCase() || "Guest")); // Outputs 'Hello, Guest' if `name` is undefined
}

// Example 3: Undefined return values
function findUser(id) {
  // Simulated user lookup
  if (id === 1) {
    return { id: 1, name: "John Doe" };
  }

  // Incorrect: Implicitly returns undefined if no user is found
}

// Usage
const user = findUser(2);
console.log(user.name); // Throws TypeError if `user` is undefined

// Correct: Check for undefined before accessing properties
if (user) {
  console.log(user.name);
} else {
  console.log("User not found.");
}

// Example 4: Undefined in arrays
function printFirstElement(arr) {
  // Incorrect: Assumes array is not empty
  console.log(arr[0].toUpperCase()); // Throws TypeError if array is empty

  // Correct: Handle undefined gracefully
  console.log(arr?.[0]?.toUpperCase() || "No elements"); // Outputs 'No elements' if array is empty
}

// Example 5: Using undefined values in computations
function addNumbers(a, b) {
  // Incorrect: Assumes both arguments are numbers
  console.log(a + b); // Results in NaN if either `a` or `b` is undefined

  // Correct: Provide default values
  console.log((a ?? 0) + (b ?? 0)); // Uses 0 if `a` or `b` is undefined
}

// Run examples
accessUndefinedProperty({});
greet(undefined);
console.log(findUser(3));
printFirstElement([]);
addNumbers(5, undefined);
