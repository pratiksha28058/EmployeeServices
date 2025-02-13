// Simulating a long-running synchronous operation
function longRunningTask() {
    console.log("Starting a long-running task...");

    // Simulate heavy computation or I/O blocking
    for (let i = 0; i < 1e9; i++) {
        // Some computation or blocking operation
        if (i % 1e6 === 0) {
            console.log(`Processing... ${i / 1e6} million operations completed.`);
        }
    }

    console.log("Long-running task completed.");
}

// Calling the long-running task
longRunningTask();

console.log("This code is blocked until the long-running task completes.");
