const express = require('express');
const app = express();
const PORT = 3001; // Using 3001 to avoid conflict with Assignment 4

app.use(express.json());
app.use(express.static('public'));

// Generate 100 mock products
const products = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: parseFloat((Math.random() * 100 + 1).toFixed(2)),
    description: `This is the description for Product ${i + 1}`
}));

// Get all products
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Get single product by id
app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
});

app.listen(PORT, () => {
    console.log(`Assignment 2 Server is running on http://localhost:${PORT}`);
});
