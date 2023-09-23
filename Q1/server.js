const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Dummy product data for men and women
const menProducts = [
  { id: 1, name: 'Men Product 1' },
  { id: 2, name: 'Men Product 2' },
  // Add more products as needed
];

const womenProducts = [
  { id: 1, name: 'Women Product 1' },
  { id: 2, name: 'Women Product 2' },
  // Add more products as needed
];

// Route for the root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to Men & Women Dummy Data');
});

// Route for getting 10 men's products
app.get('/men', (req, res) => {
  res.json(menProducts.slice(0, 10)); // Send the first 10 men's products
});

// Route for getting 10 women's products
app.get('/women', (req, res) => {
  res.json(womenProducts.slice(0, 10)); // Send the first 10 women's products
});

// Route for handling other requests (page not found)
app.get('/other', (req, res) => {
  res.status(404).send('Page not found');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
