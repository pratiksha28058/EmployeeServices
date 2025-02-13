// Function expecting specific argument types
function calculateRectangleArea(length, width) {
    if (typeof length !== 'number' || typeof width !== 'number') {
        throw new Error("Both arguments must be numbers.");
    }
    return length * width;
}

// Function expecting a callback function as an argument
function executeCallback(callback) {
    if (typeof callback !== 'function') {
        throw new Error("Argument must be a function.");
    }
    callback();
}

// Main code
try {
    // Correct function call
    console.log("Area:", calculateRectangleArea(10, 5));

    // Incorrect: Passing a string instead of a number
    console.log("Area:", calculateRectangleArea(ten, 5));

    // Incorrect: Passing an object instead of a number
    console.log("Area:", calculateRectangleArea({ length: 10 }, 51));

    // Correct function call
    executeCallback(() => console.log("Callback executed!"));

    // Incorrect: Passing a string instead of a function
    executeCallback("This is not a function");

    // Incorrect: Passing an array instead of a function
    executeCallback(["This", "is", "not", "a", "function"]);

} catch (error) {
    console.error("Error:", error.message);
}
