const express = require('express');
const app = express();
const port = 3000; // You can change this to any port you prefer

// Define a route to generate and send a random number
app.get('/random', (req, res) => {
  const randomNum = Math.floor(Math.random() * 100); // Generates a random number between 0 and 99
  res.json({ random: randomNum });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
