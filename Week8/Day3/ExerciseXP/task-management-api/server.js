// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());

const tasksFilePath = path.join(__dirname, 'tasks.json');

// Helper function to read tasks from file
const readTasksFromFile = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(tasksFilePath, 'utf8', (err, data) => {
            if (err) return reject(err);
            resolve(JSON.parse(data));
        });
    });
};

// Helper function to write tasks to file
const writeTasksToFile = (tasks) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(tasksFilePath, JSON.stringify(tasks, null, 2), 'utf8', (err) => {
            if (err) return reject(err);
            resolve();
        });
    });
};

// Routes
const taskRoutes = require('./routes/tasks');
app.use('/api/tasks', taskRoutes);

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
