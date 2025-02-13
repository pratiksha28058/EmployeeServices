// A complex function with nested loops and unsafe evaluation
function processData(data) {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      const command = data[i][j];
      
      // Dynamic execution of code (potentially unsafe)
      eval(command);
    }
  }
}

// Another example with callbacks and nested structures
function executeTasks(tasks) {
  tasks.forEach(task => {
    setTimeout(() => {
      if (typeof task.action === "string") {
        eval(task.action); // Unsafe
      } else {
        task.action(); // Safe
      }
    }, task.delay);
  });
}

// Example usage
processData([["console.log('Task 1')", "alert('Task 2')"]]);
executeTasks([{ action: "console.log('Running')", delay: 1000 }]);
