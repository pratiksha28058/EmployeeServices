// Function that returns a number
function calculateDiscount(price, discountRate) {
    if (typeof price !== 'number' || typeof discountRate !== 'number') {
        return null; // Returns null for invalid inputs
    }
    return price * (1 - discountRate);
}

// Function that returns an array
function getAvailableProducts() {
    return ["Laptop", "Smartphone", "Tablet"];
}

// Function that may return undefined
function findUserById(userId) {
    const users = {
        1: { id: 1, name: "Alice" },
        2: { id: 2, name: "Bob" },
    };
    return users[userId]; // Returns undefined if user not found
}

// Main code demonstrating incorrect handling of return values
try {
    // Correct usage of calculateDiscount
    const discountedPrice = calculateDiscount(100, 0.2);
    console.log("Discounted Price:", discountedPrice);

    // Incorrect handling: Assuming a valid return value
    const invalidDiscount = calculateDiscount("100", 0.2);
    console.log("Invalid Discounted Price:", invalidDiscount.toFixed(2)); // Error: Cannot read property 'toFixed' of null

    // Correct usage of getAvailableProducts
    const products = getAvailableProducts();
    console.log("First Product:", products[0]);

    // Incorrect handling: Assuming an object is returned
    console.log("Product Names:", products.name); // Error: undefined is not an object

    // Correct usage of findUserById
    const user = findUserById(1);
    console.log("User Found:", user.name);

    // Incorrect handling: Assuming a valid user is always returned
    const missingUser = findUserById(3);
    console.log("Missing User Name:", missingUser.name); // Error: Cannot read property 'name' of undefined

} catch (error) {
    console.error("Error:", error.message);
}
