// Example 1: Variable hoisting and improper scope handling
function incorrectHoisting() {
  console.log(myVar); // Undefined due to hoisting
  var myVar = 10;
  console.log(myVar); // Outputs 10

  if (true) {
    var myVar = 20; // 'var' is function-scoped, so it overwrites the previous declaration
    console.log(myVar); // Outputs 20
  }

  console.log(myVar); // Outputs 20 (unexpected if you intended block scoping)
}

// Example 2: Using closures incorrectly
function incorrectClosure() {
  var funcs = [];

  for (var i = 0; i < 5; i++) {
    funcs.push(function () {
      console.log(i); // All functions log the same value (5) due to shared scope of 'var'
    });
  }

  funcs.forEach((func) => func());
}

// Example 3: Shadowing variables in closures
function variableShadowing() {
  let x = 10;

  function outer() {
    let x = 20; // Shadows the outer 'x'
    console.log(x); // Outputs 20

    function inner() {
      let x = 30; // Shadows the 'x' from outer
      console.log(x); // Outputs 30
    }

    inner();
    console.log(x); // Outputs 20
  }

  outer();
  console.log(x); // Outputs 10
}

// Example 4: Accessing variables from the wrong scope
function scopeLeak() {
  let a = 5;

  if (true) {
    var b = 10; // Declared with 'var', leaks into the function scope
  }

  console.log(a); // Outputs 5
  console.log(b); // Outputs 10 (unexpected if 'b' was intended to be block-scoped)
}

// Example 5: Unexpected closure behavior in asynchronous code
function asyncClosureIssue() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log(i); // Outputs 3 for all iterations due to shared 'var' scope
    }, 1000);
  }

  // Correct way using 'let' (block-scoped):
  for (let j = 0; j < 3; j++) {
    setTimeout(function () {
      console.log(j); // Outputs 0, 1, 2 as expected
    }, 1000);
  }
}

// Run the functions to see the issues
incorrectHoisting();
incorrectClosure();
variableShadowing();
scopeLeak();
asyncClosureIssue();
