// Loops and Recursive Calls Example

// Example 1: Using a `for` loop to iterate over an array
const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

console.log("List of Fruits:");
for (let i = 0; i < fruits.length; i++) {
    console.log(`${i + 1}. ${fruits[i]}`);
}

// Example 2: Using a `while` loop to calculate the sum of numbers
function calculateSum(numbers) {
    let sum = 0;
    let index = 0;

    while (index < numbers.length) {
        sum += numbers[index];
        index++;
    }

    return sum;
}

const numbers = [5, 10, 15, 20];
console.log("Sum of numbers:", calculateSum(numbers));

// Example 3: Using recursion to calculate the factorial of a number
function factorial(n) {
    if (n <= 1) return 1; // Base case
    return n * factorial(n - 1); // Recursive call
}

const number = 5;
console.log(`Factorial of ${number} is ${factorial(number)}`);

// Example 4: Using recursion to traverse a nested object
const nestedObject = {
    name: "Alice",
    details: {
        age: 25,
        hobbies: ["Reading", "Traveling"],
        address: {
            city: "Wonderland",
            zip: "12345"
        }
    }
};

function printNestedObject(obj, depth = 0) {
    for (const key in obj) {
        if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
            console.log(`${" ".repeat(depth)}${key}:`);
            printNestedObject(obj[key], depth + 2); // Recursive call for nested objects
        } else {
            console.log(`${" ".repeat(depth)}${key}: ${obj[key]}`);
        }
    }
}

console.log("Nested Object Details:");
printNestedObject(nestedObject);

// Example 5: Infinite recursion (uncomment to observe the error)
// function infiniteRecursion() {
//     console.log("This function will call itself indefinitely");
//     infiniteRecursion(); // Recursive call with no base case
// }
// infiniteRecursion(); // Uncomment to observe stack overflow error
