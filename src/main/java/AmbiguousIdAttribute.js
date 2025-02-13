// sample.js

// Inline HTML with ambiguous id attributes
const content = `
  <div id="duplicate">First Element</div>
  <div id="duplicate">Second Element</div>
`;

// Adding elements dynamically with the same ID
document.body.innerHTML = content;

// Using JavaScript to create conflicting IDs
const newDiv = document.createElement("div");
newDiv.id = "duplicate"; // Same ID as above
document.body.appendChild(newDiv);

// Example with React (Optional)
function AmbiguousIdComponent() {
  return (
    <div>
      <div id="conflict">Component One</div>
      <div id="conflict">Component Two</div>
    </div>
  );
}

// Render React Component
ReactDOM.render(<AmbiguousIdComponent />, document.getElementById("root"));
