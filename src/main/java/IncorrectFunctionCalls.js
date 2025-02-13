// Function expecting exactly two arguments
function calculateSum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Both arguments must be numbers.");
    }
    return a + b;
}

// Function expecting an object with specific properties
function printUserDetails(user) {
    if (!user.name || !user.age) {
        throw new Error("User object must have 'name' and 'age' properties.");
    }
    console.log(`Name: ${user.name}, Age: ${user.age}`);
}

// Main code
try {
    // Correct function call
    console.log(calculateSum(5, 10));

    // Incorrect: Missing one argument
    console.log(calculateSum(5));

    // Incorrect: Too many arguments
    console.log(calculateSum(5, 10, 15));

    // Incorrect: Wrong type of arguments
    console.log(calculateSum("five", 10));

    // Correct function call
    printUserDetails({ name: "Alice", age: 25 });

    // Incorrect: Missing required properties in the object
    printUserDetails({ name: "Bob" });

    // Incorrect: Passing the wrong type
    printUserDetails("This is not an object");
} catch (error) {
    console.error("Error:", error.message);
}
