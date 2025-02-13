const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const validator = require("validator"); // Install with `npm install validator`

app.use(bodyParser.json());

// Example: Validation and Sanitization for a User Registration API
app.post("/register", (req, res) => {
    const { username, email, password } = req.body;

    // Validate username (only letters and numbers allowed, between 3 and 20 characters)
    if (!validator.isAlphanumeric(username) || !validator.isLength(username, { min: 3, max: 20 })) {
        return res.status(400).json({ error: "Invalid username. Use 3-20 alphanumeric characters only." });
    }

    // Validate email format
    if (!validator.isEmail(email)) {
        return res.status(400).json({ error: "Invalid email address." });
    }

    // Validate password (at least 8 characters, must include a number)
    if (!validator.isStrongPassword(password, { minLength: 8, minNumbers: 1 })) {
        return res.status(400).json({ error: "Password must be at least 8 characters long and include a number." });
    }

    // Sanitize inputs
    const sanitizedUsername = validator.escape(username);
    const sanitizedEmail = validator.normalizeEmail(email);

    // Process registration (placeholder logic)
    res.status(200).json({
        message: "User registered successfully!",
        user: { username: sanitizedUsername, email: sanitizedEmail }
    });
});

// Example: Validation and Sanitization for Query Parameters
app.get("/search", (req, res) => {
    const { query } = req.query;

    // Validate that the query is a non-empty string
    if (!query || !validator.isLength(query, { min: 1, max: 100 })) {
        return res.status(400).json({ error: "Search query must be between 1 and 100 characters." });
    }

    // Sanitize query to prevent XSS
    const sanitizedQuery = validator.escape(query);

    // Return search results (placeholder logic)
    res.status(200).json({
        message: "Search executed successfully.",
        query: sanitizedQuery,
        results: [] // Placeholder for actual results
    });
});

// Example: File Upload Input Validation
app.post("/upload", (req, res) => {
    const { fileName } = req.body;

    // Validate that the file name is alphanumeric and ends with .txt
    if (!validator.isAlphanumeric(fileName.replace(/\./g, "")) || !fileName.endsWith(".txt")) {
        return res.status(400).json({ error: "Invalid file name. Only .txt files are allowed." });
    }

    // Sanitize file name to prevent directory traversal
    const sanitizedFileName = validator.escape(fileName);

    // Process file upload (placeholder logic)
    res.status(200).json({
        message: "File uploaded successfully!",
        fileName: sanitizedFileName
    });
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
