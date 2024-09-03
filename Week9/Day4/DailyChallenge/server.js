// server/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors()); // Enable CORS for development

// GET route
app.get('/api/hello', (req, res) => {
  res.send('Hello From Express');
});

// server/server.js (add this below the existing code)
app.use(express.json()); // Middleware to parse JSON bodies

// POST route
app.post('/api/world', (req, res) => {
  const { value } = req.body;
  console.log('Received value:', value);
  res.send(`I received your POST request. This is what you sent me: ${value}`);
});










app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

