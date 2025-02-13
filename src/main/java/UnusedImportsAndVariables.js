// Unused import
import lodash from 'lodash';

// Function with unused variables
function calculateArea(length, width) {
    const unusedVariable = 42; // Unused variable
    return length * width;
}

// Unused function
function unusedHelperFunction() {
    console.log("This function is never called.");
}

// Variables declared but never used
const unusedConstant = "I am not used";
let unusedVariableInBlockScope = 100;

if (true) {
    let anotherUnusedVariable = "I am also not used";
    console.log("This block executes, but the variable is unused.");
}

// Correctly used variables
const length = 5;
const width = 10;
const area = calculateArea(length, width);
console.log(`Area: ${area}`);
