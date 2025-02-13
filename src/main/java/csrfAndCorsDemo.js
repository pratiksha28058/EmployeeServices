const express = require("express");
const bodyParser = require("body-parser");
const csrf = require("csurf"); // Middleware to prevent CSRF
const cors = require("cors"); // Middleware to manage CORS

const app = express();
app.use(bodyParser.json());

// Example 1: CORS Misconfiguration (Insecure Practice)
app.use(
    cors({
        origin: "*", // ALLOWING ALL ORIGINS IS INSECURE
        methods: "GET,POST,PUT,DELETE",
        allowedHeaders: "Content-Type,Authorization"
    })
);

// Example 2: Secure CORS Configuration
const secureCorsOptions = {
    origin: "https://trustedwebsite.com", // Allow only trusted origins
    methods: "GET,POST",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true // Allow cookies to be sent with requests
};
app.use("/secure-api", cors(secureCorsOptions));

// Example 3: Insecure API without CSRF Protection
app.post("/insecure-transfer", (req, res) => {
    const { amount, recipient } = req.body;

    // Perform a money transfer without any CSRF protection
    console.log(`Transferring ${amount} to ${recipient}`);
    res.status(200).send("Transfer completed.");
});

// Example 4: Secure API with CSRF Protection
const csrfProtection = csrf({ cookie: true }); // Requires `cookie-parser` middleware
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.post("/secure-transfer", csrfProtection, (req, res) => {
    const { amount, recipient } = req.body;

    // CSRF token validation happens automatically
    //console.log(`Securely transferring ${amount} to ${recipient}`);
    res.status(200).send("Secure transfer completed.");
});

// CSRF token route for client apps
app.get("/csrf-token", csrfProtection, (req, res) => {
    res.status(200).json({ csrfToken: req.csrfToken() });
});

// Example 5: Secure Content-Type Validation
app.use((req, res, next) => {
    const validContentType = req.headers["content-type"] === "application/json";
    if (!validContentType) {
        return res.status(400).send("Invalid Content-Type.");
    }
    next();
});

// Start the server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
