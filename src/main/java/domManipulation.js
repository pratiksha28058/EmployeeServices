// Select elements from the DOM
const heading = document.getElementById('heading');
const button = document.querySelector('.change-color-button');
const list = document.querySelector('#item-list');

// Add a new item to the list
function addItem() {
    const newItem = document.createElement('li'); // Create a new <li> element
    newItem.textContent = `Item ${list.children.length + 1}`; // Set the text
    list.appendChild(newItem); // Append the new item to the list
}

// Change the heading color on button click
function changeHeadingColor() {
    heading.style.color = heading.style.color === 'blue' ? 'black' : 'blue';
}

// Attach event listeners
button.addEventListener('click', () => {
    addItem(); // Add an item
    changeHeadingColor(); // Change heading color
});

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    // Dynamically create a list if not present
    if (!list) {
        const newList = document.createElement('ul');
        newList.id = 'item-list';
        document.body.appendChild(newList);
    }
});
