// 1. Setup
const express = require('express');
const app = express();
const PORT = 4000;

// --- E-commerce Routes ---

// GET /products
app.get('/products', (req, res) => {
  res.send("Here is the list of all products.");
});

// POST /products
app.post('/products', (req, res) => {
  res.send("A new product has been added.");
});

// GET /categories
app.get('/categories', (req, res) => {
  res.send("Here is the list of all categories.");
});

// POST /categories
app.post('/categories', (req, res) => {
  res.send("A new category has been created.");
});

// --- Wildcard Route for 404 Errors ---

// MAKE SURE THIS LINE USES AN ASTERISK (*), NOT A COLON (:)
app.use('*', (req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1>');
});


// --- Start the Server ---
app.listen(PORT, () => {
  console.log(`Server is running and listening on http://localhost:${PORT}`);
});