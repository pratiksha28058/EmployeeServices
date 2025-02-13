// Example file: prototypePollutionExample.js

// A function demonstrating a potential prototype pollution vulnerability
function addKeyToMap(map, key, value) {
  // Simulating untrusted input
  map[key] = value;
}

function fetchDataAndUse() {
  const userMap = {}; // A plain object acting as a "map"
  
  // Potentially untrusted data source
  const userInputKey = "__proto__";
  const userInputValue = { malicious: true };

  // Add key to the map
  addKeyToMap(userMap, userInputKey, userInputValue);

  console.log("Updated Map:", userMap);
}

// Execute the vulnerable function
fetchDataAndUse();
