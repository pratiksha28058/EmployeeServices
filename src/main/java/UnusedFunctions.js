// Function that is used
function addNumbers(a, b) {
    return a + b;
}

// Function defined but never called
function multiplyNumbers(a, b) {
    return a * b; // Unused function
}

// Function with no references
function unusedHelperFunction() {
    console.log("This helper function is never used.");
}

// Another unused function
function formatString(str) {
    return str.trim().toUpperCase();
}

// Calling the only used function
const result = addNumbers(5, 10);
console.log(`The result of addition is: ${result}`);
