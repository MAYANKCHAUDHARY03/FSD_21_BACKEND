const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3002;

app.use(cors());
app.use(express.static('public'));

app.get('/api/products', async (req, res) => {
    try {
        // Fetching directly from the provided GitHub repo for Assignment 3
        const response = await fetch('https://raw.githubusercontent.com/zaid786-collab/FSD-CSE-21/refs/heads/main/Production%20API/backend/data/products.json');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error("Error fetching from github:", error);
        res.status(500).json({ error: 'Failed to fetch products from GitHub repo' });
    }
});

app.listen(PORT, () => {
    console.log(`Assignment 3 Server running at http://localhost:${PORT}`);
});
