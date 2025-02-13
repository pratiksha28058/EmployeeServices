// Using 'var' when 'let' or 'const' should be used
var userName = "Alice"; // Should use 'let' or 'const'
userName = "Bob"; // Reassigning the value is fine, but 'var' should be avoided.

// Using 'const' incorrectly (attempting to reassign)
const maxUsers = 100;
// maxUsers = 200; 
// Uncommenting this line will cause an error because 'const' variables cannot be reassigned.

// Using 'let' unnecessarily when 'const' should be used
let userRole = "admin"; // Should be 'const' since this value does not change
console.log(`User role: ${userRole}`);

// Mixing 'var', 'let', and 'const' in the same block
function processUsers() {
  var count = 0; // Using 'var' instead of 'let' or 'const'
  let userId = "123"; // Using 'let' unnecessarily here
  const userType = "guest"; // Proper usage of 'const'

  if (true) {
    var count = 10; // 'var' allows redeclaration, which can cause issues
    let userId = "456"; // Shadowing the variable in the same block
    const userType = "member"; // Shadowing with 'const' is allowed
    console.log(count, userId, userType);
  }

  console.log(count); // Prints 10, because 'var' is function-scoped
  // console.log(userId, userType); // Error: Block-scoped variables not accessible outside
}

// Inconsistent usage in loops
function displayNumbers() {
  for (var i = 0; i < 5; i++) { // Using 'var' instead of 'let'
    console.log(i);
  }
  // 'i' is still accessible here due to 'var'
  console.log(`After loop, i = ${i}`); 

  for (let j = 0; j < 5; j++) {
    console.log(j);
  }
  // console.log(j); // Error: 'j' is not accessible here
}

processUsers();
displayNumbers();
