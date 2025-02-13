// Example of unsafe evaluation
eval("console.log('This is unsafe')");

setTimeout("console.log('This is unsafe too')", 1000);

setInterval("console.log('Still unsafe')", 2000);

// Example of safe usage
setTimeout(() => console.log('This is safe'), 1000);

setInterval("console.log('Still unsafe')", 5000);
