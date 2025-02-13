// Example 1: Using eval() (Security Risk)
function calculateExpression(expression) {
    // `eval()` is used to execute a string as JavaScript code
    const result = eval(expression);
    console.log(`Result: ${result}`);
}
calculateExpression("2 + 3 * 5"); // Risk: Malicious input like "process.exit()" could be passed

// Example 2: Using Function Constructor (Security Risk)
function createFunction(funcBody) {
    // Dynamically generates a function from a string
    const dynamicFunction = new Function("a", "b", funcBody);
    return dynamicFunction;
}
const add = createFunction("return a + b;");
console.log(add(2, 3)); // Risk: Malicious input in `funcBody` can lead to code injection

// Example 3: Dynamically Generated Code in setTimeout()
function delayedExecution(userInput) {
    // User-provided input is used to construct code for execution
    setTimeout(`console.log(${userInput})`, 1000);
}
delayedExecution('"Hello, World!"'); // Risk: User input could execute malicious code

// Example 4: Dynamically Creating HTML Elements with Handlers
function generateButton(action) {
    // Dynamically generates an HTML button with inline event handler
    const buttonHTML = `<button onclick="${action}">Click me</button>`;
    document.body.innerHTML += buttonHTML;
}
generateButton("alert('Hello!');"); // Risk: Inline handlers allow arbitrary code execution
