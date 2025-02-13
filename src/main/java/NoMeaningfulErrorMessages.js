function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw new Error("Error"); // Non-meaningful error message
        }
        return a / b;
    } catch (error) {
        console.error("Something went wrong."); // Generic error message
    }
}

function processUserInput(input) {
    try {
        if (!input) {
            throw new Error("Invalid input"); // Too generic
        }
        console.log("Processing input:", input);
    } catch (error) {
        console.error("An error occurred."); // Provides no useful details
    }
}

function readFile(filePath) {
    try {
        if (!filePath.endsWith(".txt")) {
            throw new Error("File error"); // Does not specify the actual issue
        }
        console.log("Reading file:", filePath);
    } catch (error) {
        console.error("Failed to read file."); // Ambiguous and unhelpful
    }
}

// Examples of calls
divideNumbers(10, 0); // Logs: "Something went wrong."
processUserInput(""); // Logs: "An error occurred."
readFile("data.json"); // Logs: "Failed to read file."
