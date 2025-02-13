// Example 1: Missing `catch` block
function missingCatchBlock() {
    try {
        console.log("Trying to execute something risky...");
        throw new Error("An error occurred!");
    } // No catch block
    finally {
        console.log("Finally block executed.");
    }
}

// Example 2: Missing `finally` block
function missingFinallyBlock() {
    try {
        console.log("Trying something else...");
        throw new Error("Another error occurred!");
    } catch (error) {
        console.error("Caught an error:", error.message);
    } // No finally block
}

// Example 3: Improper exception handling
function improperExceptionHandling() {
    try {
        console.log("Performing an operation...");
        throw new Error("Critical operation failed!");
    } catch (error) {
        console.error("Caught an error, but not handling it properly:", error.message);
        // Error is caught but not properly handled
    } finally {
        console.log("Cleaning up resources...");
    }
}

// Example 4: Overwriting a return value in `finally`
function overwriteReturnValue() {
    try {
        console.log("Returning value from try block...");
        return "Try block result";
    } catch (error) {
        console.error("Caught an error:", error.message);
        return "Catch block result";
    } finally {
        console.log("Overwriting return value...");
        return "Finally block result"; // This overwrites the previous return values
    }
}

// Example 5: Throwing an error in `finally` block
function throwingErrorInFinally() {
    try {
        console.log("Attempting risky operation...");
        throw new Error("Initial error occurred!");
    } catch (error) {
        console.error("Handling initial error:", error.message);
    } finally {
        console.log("Throwing a new error in finally...");
        throw new Error("New error from finally block!"); // Overwrites previous error handling
    }
}

// Main execution
try {
    missingCatchBlock();
} catch (error) {
    console.error("Error from missingCatchBlock:", error.message);
}

missingFinallyBlock();
improperExceptionHandling();

try {
    const result = overwriteReturnValue();
    console.log("Result from overwriteReturnValue:", result);
} catch (error) {
    console.error("Error from overwriteReturnValue:", error.message);
}

try {
    throwingErrorInFinally();
} catch (error) {
    console.error("Error from throwingErrorInFinally:", error.message);
}
