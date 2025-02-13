// Function with two required parameters
function greet(name, greeting) {
    return `${greeting}, ${name}!`;
}

// Function with three required parameters
function calculateArea(length, width, height) {
    return length * width * height;
}

// Function with a single optional parameter
function logMessage(message = "Default message") {
    console.log(message);
}

// Function with rest parameters
function sumAll(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

// Incorrect and correct function calls
try {
    // Correct usage
    console.log(greet("Alice", "Hello")); // Output: Hello, Alice!

    // Too few arguments
    console.log(greet("Alice")); // Output: undefined, Alice!

    // Too many arguments
    console.log(greet("Alice", "Hi", "Extra Argument")); // Output: Hi, Alice!

    // Correct usage of calculateArea
    console.log(calculateArea(2, 3, 4)); // Output: 24

    // Too few arguments
    console.log(calculateArea(2, 3)); // Output: NaN (missing height parameter)

    // Correct usage of logMessage
    logMessage("This is a custom message."); // Output: This is a custom message.

    // No arguments for logMessage (uses default parameter)
    logMessage(); // Output: Default message

    // Extra arguments for logMessage (ignored)
    logMessage("Message", "Extra Argument"); // Output: Message

    // Correct usage of sumAll
    console.log(sumAll(1, 2, 3, 4)); // Output: 10

    // No arguments for sumAll
    console.log(sumAll()); // Output: 0

} catch (error) {
    console.error("Error:", error.message);
}
