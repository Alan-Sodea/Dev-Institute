// server.js
const express = require('express');
const { Pool } = require('pg');
const bcrypt = require('bcryptjs');
const app = express();
const port = 3000;

// Create a new pool instance to manage PostgreSQL connections
const pool = new Pool({
    user: 'yourusername',
    host: 'localhost',
    database: 'userdb',
    password: 'yourpassword',
    port: 5432,
});

app.use(express.json());

// Routes
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);

// Error handling for invalid routes
app.use((req, res, next) => {
    res.status(404).json({ error: 'Route not found' });
});

// Error handling for server errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Server error' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
