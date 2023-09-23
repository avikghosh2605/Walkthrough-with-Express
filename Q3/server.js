// Import the necessary modules
const express = require('express');

// Create an instance of the Express application
const app = express();
const port = 3000; // You can choose any available port

// Define your routes and their corresponding responses
app.get('/', (req, res) => {
  res.json({ msg: 'I am homepage' });
});

app.get('/about', (req, res) => {
  res.json({ msg: 'I am about page' });
});

app.get('/contact', (req, res) => {
  res.json({ email: 'support@pwskills.com' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
