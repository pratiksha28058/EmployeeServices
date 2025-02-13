const fs = require('fs');

// Example 1: Blocking the main thread with a synchronous file read (Improper use)
function readFileSyncExample() {
    console.log("Reading file synchronously...");
    const data = fs.readFileSync('largeFile.txt', 'utf8'); // Blocks the thread
    console.log("File contents:", data);
}
readFileSyncExample();

// Example 2: Improperly handling asynchronous code
function readFileAsyncIncorrectly() {
    console.log("Reading file asynchronously...");

    // Using asynchronous function without proper callback or Promise handling
    fs.readFile('largeFile.txt', 'utf8', (err, data) => {
        if (err) {
            console.log("Error reading file:", err); // Improper error handling
        }
        // Forgetting to handle the `data` if no error occurs
    });

    console.log("This runs before the file read completes, causing potential issues.");
}
readFileAsyncIncorrectly();

// Example 3: Missing `await` in an `async` function
async function fetchData() {
    console.log("Fetching data...");

    // Forgetting to use `await` for asynchronous operation
    const data = fetch('https://api.example.com/data'); // This will return a Promise, not the result
    console.log("Fetched data:", data); // Logs the Promise instead of the actual data
}
fetchData();

// Example 4: Improper use of Promises
function promiseMisuse() {
    console.log("Starting promise misuse example...");

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Promise resolved!"), 1000);
    });

    // Forgetting to handle the promise result or errors
    promise.then(); // Does nothing, result is discarded
    console.log("This message shows before the promise resolves.");
}
promiseMisuse();
