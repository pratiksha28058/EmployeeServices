const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// Insecure Practice 1: Hardcoded Credentials
const hardcodedUsername = "admin";
const hardcodedPassword = "password123";

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    // Hardcoded credential check
    if (username === hardcodedUsername && password === hardcodedPassword) {
        return res.status(200).json({ message: "Login successful!", token: "fake-jwt-token" });
    }

    return res.status(401).json({ message: "Invalid username or password." });
});

// Insecure Practice 2: Storing Passwords in Plaintext
let users = [
    { id: 1, username: "user1", password: "mypassword" }, // Password stored in plaintext
    { id: 2, username: "user2", password: "123456" }
];

app.post("/signup", (req, res) => {
    const { username, password } = req.body;

    // Directly storing plaintext passwords
    users.push({ id: users.length + 1, username, password });
    return res.status(201).json({ message: "User registered successfully." });
});

// Insecure Practice 3: No Token Expiry or Verification
app.get("/protected", (req, res) => {
    const token = req.headers.authorization;

    // Accepts any token without verification
    if (token === "fake-jwt-token") {
        return res.status(200).json({ message: "Access granted to protected route." });
    }

    return res.status(403).json({ message: "Access denied." });
});

// Insecure Practice 4: Exposing Sensitive Data in Error Messages
app.post("/reset-password", (req, res) => {
    const { email } = req.body;

    // Returning too much information about user existence
    const user = users.find((u) => u.email === email);
    if (!user) {
        return res.status(404).json({ error: `User with email ${email} not found.` });
    }

    // Placeholder for password reset logic
    return res.status(200).json({ message: "Password reset link sent to email." });
});

// Insecure Practice 5: No Rate Limiting or Bruteforce Protection
app.post("/login-bruteforce", (req, res) => {
    const { username, password } = req.body;

    // No rate limiting to prevent repeated attempts
    if (username === hardcodedUsername && password === hardcodedPassword) {
        return res.status(200).json({ message: "Login successful!" });
    }

    return res.status(401).json({ message: "Invalid username or password." });
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
