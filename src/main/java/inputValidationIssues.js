// Example 1: Missing Input Validation (XSS Vulnerability)
function greetUser(userInput) {
    // User input is directly injected into the DOM
    document.body.innerHTML = `<h1>Welcome, ${userInput}</h1>`;
}
greetUser("<script>alert('XSS!');</script>");

// Example 2: SQL Injection Risk
function fetchUser(userId) {
    // User input is directly used in a SQL query string
    const query = `SELECT * FROM users WHERE id = '${userId}'`;
    console.log("Executing query:", query);
    // Assume db.execute() runs the query on the database
    db.execute(query);
}
fetchUser("1 OR 1=1; DROP TABLE users;");

// Example 3: Type Mismatch in User Input
function calculateAge(yearOfBirth) {
    // User input is assumed to be a number without validation
    const age = 2024 - yearOfBirth;
    console.log(`You are ${age} years old.`);
}
calculateAge("twenty"); // Invalid input causing unexpected results

// Example 4: Unhandled JSON Parsing
function parseUserData(jsonInput) {
    // No validation or error handling for JSON parsing
    const userData = JSON.parse(jsonInput);
    console.log("User Data:", userData);
}
parseUserData('{ "name": "John", "age": "twenty" }'); // No validation for "age"

// Example 5: Unsanitized Input in Command Execution
const { exec } = require("child_process");
function executeCommand(userCommand) {
    // User input directly used in a shell command
    exec(userCommand, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
        }
        console.log(`Output: ${stdout}`);
    });
}
executeCommand("rm -rf /"); // Potentially destructive command
