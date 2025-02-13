// Function without proper .catch() handling
function fetchData(url) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log("Data fetched:", data);
        });
        // Missing .catch() to handle errors
}

// Async function without try-catch
async function getUserInfo(userId) {
    const response = await fetch(`https://api.example.com/user/${userId}`);
    const data = await response.json();
    console.log("User Info:", data);
    // Missing try-catch for error handling
}

// Properly handled promises for reference
function fetchWithErrorHandling(url) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log("Data fetched with handling:", data);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
}

// Async function with proper try-catch
async function getSecureUserInfo(userId) {
    try {
        const response = await fetch(`https://api.example.com/user/${userId}`);
        const data = await response.json();
        console.log("Secure User Info:", data);
    } catch (error) {
        console.error("Error fetching secure user info:", error);
    }
}

// Example calls
fetchData("https://api.example.com/data");
getUserInfo(123);
fetchWithErrorHandling("https://api.example.com/data");
getSecureUserInfo(123);
