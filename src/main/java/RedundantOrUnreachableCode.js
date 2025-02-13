function calculateTotal(items) {
    let total = 0;

    // Redundant loop: total is reset later, making this block redundant
    for (let item of items) {
        total += item.price;
    }

    // Proper calculation
    total = items.reduce((sum, item) => sum + item.price, 0);

    return total;
}

function exampleFunction(value) {
    if (value < 10) {
        return "Value is less than 10";
    }

    // Unreachable: The previous return ensures this block is never executed
    console.log("This will never be printed because value < 10 returned above.");
}

function checkStatus(status) {
    if (status === "active") {
        console.log("Status is active");
        return true;
    } else {
        return false;
    }

    // Unreachable: This block is after a return statement
    console.log("This code is never executed.");
}

// Dead code example: This variable is declared but never used
const unusedVariable = "I am never used!";

// Example demonstrating redundant condition
function redundantCheck(number) {
    if (number > 0) {
        console.log("Positive number");
    } else if (number > 0) { // Redundant condition, already checked above
        console.log("This will never run");
    } else {
        console.log("Non-positive number");
    }
}

// Calling the functions to demonstrate behavior
console.log("Total:", calculateTotal([{ price: 10 }, { price: 20 }]));
exampleFunction(5);
checkStatus("inactive");
redundantCheck(5);
