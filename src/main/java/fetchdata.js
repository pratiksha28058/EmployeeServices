fetch('src/main/java/Node.js')
  .then(response => response.json())
  .then(data => console.log(data.message));
