// Example of valid function
function greet(name) {
    console.log(`Hello, ${name}!`);
}

// Main code
try {
    // Correct function call
    greet("Alice");

    // Incorrect: Calling a function that doesn't exist
    sayGoodbye("Bob");

    // Incorrect: Attempting to call a variable as a function
    const notAFunction = "This is a string";
    //notAFunction();

    // Incorrect: Calling a function that was never declared
    undefinedFunction();

} catch (error) {
    console.error("Error:", error.message);
}
