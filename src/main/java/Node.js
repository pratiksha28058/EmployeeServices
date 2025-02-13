const express = require('express');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.get('/api/data', (req, res) => {
    const apiKey = process.env.API_SECRET_KEY;
    // Use the API key to fetch data
    res.json({ message: 'Data retrieved successfully', key: apiKey });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
